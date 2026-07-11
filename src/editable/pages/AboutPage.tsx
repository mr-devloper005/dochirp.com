import Link from 'next/link'
import { BookOpenText, Feather, Newspaper, Search } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const stats = [
  ['01', 'Article-led discovery'],
  ['04', 'Editorial reading lanes'],
  ['24/7', 'Open archive browsing'],
]

const lanes = [
  { icon: Newspaper, title: 'Features and reports', body: 'Longer reads with visual pacing, context, and enough room for the headline to breathe.' },
  { icon: Feather, title: 'Essays and opinion', body: 'Point-of-view writing presented with calm typography and deliberate section rhythm.' },
  { icon: Search, title: 'Useful discovery', body: 'Search, archives, related posts, and category paths help every reader find the next relevant article.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f7f4ef)] text-[var(--editable-page-text,#111)]">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <article>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a9846f]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">{pagesContent.about.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/64">{pagesContent.about.description}</p>
            <div className="mt-8 grid gap-4 text-base leading-8 text-black/68">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/article" className="bg-black px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white">Browse articles</Link>
              <Link href="/contact" className="border border-black/15 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.14em]">Pitch a story</Link>
            </div>
          </article>

          <aside className="grid gap-4 self-start">
            <div className="bg-black p-7 text-white">
              <BookOpenText className="h-8 w-8 text-[#c7a38d]" />
              <h2 className="mt-6 text-3xl font-black tracking-tight">{globalContent.site.name}</h2>
              <p className="mt-4 text-sm leading-7 text-white/66">{globalContent.footer.tagline}</p>
              <div className="mt-7 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
                {stats.map(([value, label]) => (
                  <div key={label} className="px-3 py-4 first:pl-0 last:pr-0">
                    <p className="text-2xl font-black">{value}</p>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-white/48">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            {lanes.map((lane) => (
              <div key={lane.title} className="border border-black/10 bg-white p-6">
                <lane.icon className="h-5 w-5 text-[#a9846f]" />
                <h2 className="mt-4 text-xl font-black tracking-tight">{lane.title}</h2>
                <p className="mt-2 text-sm leading-7 text-black/62">{lane.body}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto grid max-w-[var(--editable-container)] gap-5 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="border-l-2 border-[#c7a38d] pl-5">
                <h2 className="text-2xl font-black tracking-tight">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-black/62">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
