import type { Metadata } from 'next'
import Link from 'next/link'
import { FilePenLine, Newspaper, UserRoundPlus } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { globalContent } from '@/editable/content/global.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: `Create a local reader account for ${globalContent.site.name}.` })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-black text-white">
        <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.88fr_1fr] lg:px-8">
          <div className="border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-black"><UserRoundPlus className="h-4 w-4" /> New reader</div>
            <h1 className="mt-6 text-3xl font-black tracking-tight">Create account</h1>
            <p className="mt-2 text-sm leading-7 text-white/58">Create a local account for preview access and the navbar will update with your name after signup.</p>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-white/65">Already have an account? <Link href="/login" className="font-black text-white underline-offset-4 hover:underline">Login</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c7a38d]">Join the publication</p>
            <h2 className="mt-5 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">A better doorway into article discovery.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/64">The account flow is intentionally simple: create a reader profile, return to the homepage, and see the site behave like a signed-in publication experience.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [Newspaper, 'Article-first homepage, archives, and detail pages'],
                [FilePenLine, 'Ready for pitches, comments, and contributor flows'],
              ].map(([Icon, label]) => (
                <div key={String(label)} className="border border-white/10 p-5">
                  <Icon className="h-5 w-5 text-[#c7a38d]" />
                  <p className="mt-4 text-sm font-black leading-6 text-white/84">{String(label)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
