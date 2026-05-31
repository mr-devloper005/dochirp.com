import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { ReactNode } from 'react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function SectionFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto w-full max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
}

function MetaLine({ post }: { post: SitePost }) {
  return (
    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/42">
      {getEditableCategory(post)}
    </p>
  )
}

function FeaturedOverlay({ post, href, compact = false }: { post: SitePost; href: string; compact?: boolean }) {
  return (
    <Link href={href} className={`group relative block overflow-hidden bg-black text-white ${compact ? 'min-h-[260px]' : 'min-h-[560px]'}`}>
      <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-72 transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.80))]" />
      <div className={`relative z-10 flex h-full flex-col justify-end ${compact ? 'min-h-[260px] p-5' : 'min-h-[560px] p-7 sm:p-10'}`}>
        <span className="w-fit bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-black">{getEditableCategory(post)}</span>
        <h3 className={`${compact ? 'text-xl' : 'text-4xl sm:text-5xl lg:text-6xl'} mt-4 max-w-3xl font-black leading-[0.98] tracking-tight`}>{post.title}</h3>
        {!compact ? <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">{getEditableExcerpt(post, 190)}</p> : null}
      </div>
    </Link>
  )
}

function ArticleTile({ post, href, large = false }: { post: SitePost; href: string; large?: boolean }) {
  return (
    <Link href={href} className="group block">
      <div className={`relative overflow-hidden bg-[#e5ddd5] ${large ? 'aspect-[16/11]' : 'aspect-[4/3]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="pt-5">
        <MetaLine post={post} />
        <h3 className={`${large ? 'text-2xl sm:text-3xl' : 'text-xl'} mt-3 font-black leading-tight tracking-tight text-black group-hover:underline group-hover:underline-offset-4`}>{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-black/62">{getEditableExcerpt(post, large ? 170 : 120)}</p>
      </div>
    </Link>
  )
}

function ListPick({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid grid-cols-[82px_minmax(0,1fr)] gap-4 border-b border-black/10 py-4 last:border-b-0">
      <div className="relative aspect-square overflow-hidden bg-[#e5ddd5]">
        <img src={getEditablePostImage(post)} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a9846f]">Latest {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 line-clamp-3 text-sm font-black leading-tight tracking-tight group-hover:underline group-hover:underline-offset-4">{post.title}</h3>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroPost = posts[0]
  const sidePosts = posts.slice(1, 3)
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Read the best ${taskLabel(primaryTask).toLowerCase()} today.`

  return (
    <div className="bg-white">
      <SectionFrame className="py-10 sm:py-12">
        <div className="border-b border-black/10 pb-8 text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a9846f]">{pagesContent.home.hero.badge}</p>
          <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">{heroTitle}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/62">{pagesContent.home.hero.description}</p>
        </div>
        {heroPost ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_330px]">
            <FeaturedOverlay post={heroPost} href={postHref(primaryTask, heroPost, primaryRoute)} />
            <div className="grid gap-5">
              {sidePosts.map((post) => <FeaturedOverlay key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} compact />)}
              <form action="/search" className="border border-black/10 bg-[#f7f4ef] p-5">
                <p className="text-xs font-black uppercase tracking-[0.20em] text-[#a9846f]">Article Finder</p>
                <div className="mt-4 flex border border-black/15 bg-white">
                  <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm font-bold outline-none" />
                  <button className="flex w-12 items-center justify-center bg-black text-white" aria-label="Search"><Search className="h-4 w-4" /></button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </SectionFrame>
    </div>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(3, 8)
  if (!railPosts.length) return null
  return (
    <div className="border-y border-black/10 bg-[#f7f4ef]">
      <SectionFrame className="py-10">
        <h2 className="text-center text-2xl font-black uppercase tracking-[0.08em]">Featured Posts</h2>
        <div className="mt-7 grid gap-px bg-white md:grid-cols-5">
          {railPosts.map((post) => (
            <FeaturedOverlay key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} compact />
          ))}
        </div>
      </SectionFrame>
    </div>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const gridPosts = posts.slice(8, 16)
  const latestPosts = posts.slice(0, 5)
  if (!gridPosts.length) return null
  return (
    <SectionFrame className="py-14 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_306px]">
        <div>
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-black/10 pb-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a9846f]">Magazine Desk</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">Latest articles</h2>
            </div>
            <Link href={primaryRoute} className="hidden text-xs font-black uppercase tracking-[0.14em] sm:inline-flex">View all</Link>
          </div>
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
            {gridPosts.map((post, index) => <ArticleTile key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} large={index < 2} />)}
          </div>
        </div>
        <aside className="space-y-7">
          <div className="bg-[#f3eeea] p-7 text-center">
            <div className="mx-auto h-48 w-48 overflow-hidden bg-[#e5ddd5]">
              {latestPosts[0] ? <img src={getEditablePostImage(latestPosts[0])} alt="" className="h-full w-full object-cover" /> : null}
            </div>
            <h3 className="mt-5 text-xl font-black">Editorial Notes</h3>
            <p className="mt-3 text-sm leading-7 text-black/58">Daily reading cues, category highlights, and carefully selected article paths for curious readers.</p>
          </div>
          <div className="bg-[#f3eeea] p-6">
            <h3 className="text-xs font-black uppercase tracking-[0.20em] text-[#a9846f]">Latest Posts</h3>
            <div className="mt-4 border-t border-black/15">
              {latestPosts.map((post, index) => <ListPick key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        </aside>
      </div>
    </SectionFrame>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collectionPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(16)
  const items = collectionPosts.slice(0, 6)
  if (!items.length) return null
  return (
    <div className="bg-white">
      <SectionFrame className="border-t border-black/10 py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a9846f]">Topic archive</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight">All the topics. All the voices.</h2>
            <p className="mt-4 text-sm leading-7 text-black/62">Browse article streams from recent publishing windows, then follow the headline that earns your attention.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((post) => <ArticleTile key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </div>
      </SectionFrame>
    </div>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#c7a38d] text-black">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-black/54">{pagesContent.home.cta.badge}</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{pagesContent.home.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-black/62">{pagesContent.home.cta.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/article" className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white">Browse Articles <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/contact" className="border border-black/20 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.14em]">Pitch a story</Link>
        </div>
      </div>
    </section>
  )
}
