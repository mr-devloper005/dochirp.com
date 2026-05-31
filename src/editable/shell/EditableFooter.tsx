import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#050505', '--editable-footer-text': '#ffffff' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const brandName = globalContent.site.name
  const [firstWord, ...restWords] = brandName.split(/\s+/)
  const brandTail = restWords.join(' ')

  return (
    <footer style={footerVars} className="border-t border-white/10 bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-baseline gap-1 text-3xl font-light uppercase tracking-[-0.06em]">
            <span>{firstWord || brandName}</span>
            {brandTail ? <span className="font-black">{brandTail}</span> : null}
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Explore</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-white">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold text-white/70 hover:text-white">{label}</Link>
            ))}
          </div>
        </div>

        <div className="border border-white/10 p-5">
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Editorial Desk</h3>
          <p className="mt-4 text-sm leading-7 text-white/62">Pitch essays, reading lists, interviews, explainers, and field notes that help readers find useful articles faster.</p>
          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-black"><Mail className="h-4 w-4" /> Contact</Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold uppercase tracking-[0.14em] text-white/45">
        © {year} {brandName}. All rights reserved.
      </div>
    </footer>
  )
}
