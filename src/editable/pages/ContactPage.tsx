'use client'

import { Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: PenLine, title: 'Article pitches', body: 'Send a clear angle, draft summary, contributor bio, and why the story matters now.' },
  { icon: Quote, title: 'Corrections and updates', body: 'Flag factual edits, broken links, attribution notes, or follow-up context for published pieces.' },
  { icon: Megaphone, title: 'Partnerships', body: 'Reach out for sponsored series, newsletter collaborations, expert commentary, or editorial campaigns.' },
]

const notes = [
  { icon: FileText, title: 'What to include', body: 'Working headline, short abstract, intended section, source links, and any image notes.' },
  { icon: Sparkles, title: 'What we value', body: 'Specific arguments, useful reporting, practical context, and writing that respects the reader.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell className={tone.shell}>
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a9846f]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/64">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="border border-black/10 bg-white p-5">
                  <lane.icon className="h-5 w-5 text-[#a9846f]" />
                  <h2 className="mt-4 text-xl font-black tracking-tight">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-black/62">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-7 ${tone.panel}`}>
            <h2 className="text-2xl font-semibold">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
