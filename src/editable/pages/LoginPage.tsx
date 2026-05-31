import type { Metadata } from 'next'
import Link from 'next/link'
import { BookMarked, Clock3, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { globalContent } from '@/editable/content/global.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: `Login to ${globalContent.site.name} and return to your article reading flow.` })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f7f4ef] text-black">
        <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.86fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#a9846f]">Reader access</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">Return to the articles waiting on your desk.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-black/64">Sign in to keep browsing the publication with a familiar identity. This account experience is lightweight for previews while keeping the website interface complete.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [BookMarked, 'Follow saved reading paths'],
                [Clock3, 'Pick up recent article sessions'],
                [Sparkles, 'Keep contributor access polished'],
              ].map(([Icon, label]) => (
                <div key={String(label)} className="border border-black/10 bg-white p-4">
                  <Icon className="h-5 w-5 text-[#a9846f]" />
                  <p className="mt-4 text-sm font-black leading-6">{String(label)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-black/10 bg-white p-6 shadow-[0_24px_70px_rgba(17,17,17,0.10)] sm:p-8">
            <h2 className="text-3xl font-black tracking-tight">Login</h2>
            <p className="mt-2 text-sm leading-7 text-black/58">Use your reader account to switch the navbar into signed-in mode.</p>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-black/62">New here? <Link href="/signup" className="font-black text-black underline-offset-4 hover:underline">Create an account</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
