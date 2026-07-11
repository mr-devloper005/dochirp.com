'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = globalContent.site.name
  const [firstWord, ...restWords] = brandName.split(/\s+/)
  const brandTail = restWords.join(' ')
  const navVars = {
    '--editable-nav-bg': '#050505',
    '--editable-nav-text': '#ffffff',
    '--editable-nav-active': '#ffffff',
    '--editable-nav-active-text': '#050505',
    '--editable-search-bg': '#111111',
    '--editable-border': 'rgba(255,255,255,0.14)',
    '--editable-container': '1180px',
  } as CSSProperties
  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/' },
      ...SITE_CONFIG.tasks.filter((task) => task.enabled).slice(0, 5).map((task) => ({ label: task.label, href: task.route })),
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    []
  )

  const renderAuthActions = (mobile = false) =>
    session ? (
      <div className={mobile ? 'grid gap-2' : 'hidden items-center gap-2 sm:flex'}>
        <span className={`${mobile ? 'justify-start' : 'max-w-40'} inline-flex items-center gap-2 truncate border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/88`}>
          <UserRound className="h-4 w-4 shrink-0" /> {session.name}
        </span>
        <button
          type="button"
          onClick={() => {
            logout()
            setOpen(false)
          }}
          className="inline-flex items-center gap-2 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-black"
        >
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>
    ) : (
      <div className={mobile ? 'grid grid-cols-2 gap-2' : 'hidden items-center gap-2 sm:flex'}>
        <Link href="/login" onClick={() => setOpen(false)} className="px-3 py-2 text-center text-xs font-black uppercase tracking-[0.12em] text-white/75 hover:text-white">Login</Link>
        <Link href="/signup" onClick={() => setOpen(false)} className="bg-white px-4 py-2.5 text-center text-xs font-black uppercase tracking-[0.12em] text-black shadow-sm">Sign up</Link>
      </div>
    )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)]">
      <div className="hidden border-b border-[var(--editable-border)] text-[11px] font-black uppercase tracking-[0.16em] text-white/70 lg:block">
        <div className="mx-auto flex max-w-[var(--editable-container)] items-center justify-between px-6">
          <div className="flex h-10 items-center divide-x divide-white/10">
            {[].map((label) => (
              <Link key={label} href="/article" className="inline-flex h-10 items-center gap-1 px-4 hover:text-white">
                {label} <ChevronDown className="h-3 w-3" />
              </Link>
            ))}
          </div>
          <div className="flex h-10 items-center divide-x divide-white/10">
            <Link href="/contact" className="inline-flex h-10 items-center gap-1 px-4 hover:text-white">Follow Us <ChevronDown className="h-3 w-3" /></Link>
            <Link href="/search" className="inline-flex h-10 w-12 items-center justify-center hover:text-white" aria-label="Search"><Search className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex min-h-[72px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-baseline gap-1 text-2xl font-light uppercase tracking-[-0.06em] sm:text-3xl">
          <span>{firstWord || brandName}</span>
          {brandTail ? <span className="font-black tracking-[-0.05em]">{brandTail}</span> : null}
        </Link>

        <div className="mx-auto hidden items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`px-3 py-2 text-xs font-black uppercase tracking-[0.10em] transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'text-white/72 hover:text-white'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {renderAuthActions()}
          <button type="button" onClick={() => setOpen((value) => !value)} className="border border-[var(--editable-border)] p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border border-[var(--editable-border)] px-4 py-3 text-sm font-black uppercase tracking-[0.12em]">
                {item.label}
              </Link>
            ))}
            {renderAuthActions(true)}
          </div>
        </div>
      ) : null}
    </header>
  )
}
