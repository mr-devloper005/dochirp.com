import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Article-first stories, essays, and editorial picks',
      description: 'Explore fresh articles, essays, explainers, interviews, and curated reading lists through a polished magazine-style experience.',
      openGraphTitle: 'Article-first stories, essays, and editorial picks',
      openGraphDescription: 'Discover thoughtful articles and image-led editorial posts through a polished reading-first experience.',
      keywords: ['article platform', 'editorial site', 'online magazine', 'content discovery'],
    },
    hero: {
      badge: 'Independent article journal',
      title: ['Read the stories', 'behind the moment.'],
      description: 'Explore sharp essays, useful explainers, interviews, opinion pieces, and image-led features arranged for calm, focused reading.',
      primaryCta: { label: 'Read latest stories', href: '/article' },
      secondaryCta: { label: 'Explore visuals', href: '/image' },
      searchPlaceholder: 'Search articles, essays, interviews, and topics',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest articles shape the rhythm of the homepage.',
      featureCardDescription: 'Fresh posts stay visual, scannable, and readable without changing the publishing logic behind the site.',
    },
    intro: {
      badge: 'About the publication',
      title: 'Built for readers who want substance without visual noise.',
      paragraphs: [
        'This site brings together article-style reading, strong editorial imagery, and structured discovery so visitors can move naturally from one idea to the next.',
        'Instead of burying thoughtful writing behind clutter, the publication gives headlines, excerpts, categories, and related posts enough space to work.',
        'Whether someone starts with a feature, an interview, a news-style update, or a reading list, they can keep discovering relevant articles without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with strong image-led article cards.',
        'Editorial sections for features, interviews, guides, and opinion pieces.',
        'Cleaner browsing rhythm designed to make article discovery feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Find your next article without fighting the interface.',
      description: 'Move between fresh stories, featured posts, topic archives, and related reads through one clearer editorial system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'An article journal shaped for slower attention and faster discovery.',
    description: `${slot4BrandConfig.siteName} is an editorial article platform for readers who want thoughtful writing, strong images, and a browsing experience that respects attention.`,
    paragraphs: [
      'Every page is arranged around a simple promise: make the article easy to find, make the headline easy to understand, and make the next read feel natural.',
      'We design for essays, explainers, interviews, opinion pieces, trend notes, and practical reading lists that deserve more care than a feed can give them.',
      'The result is a publication surface that feels polished like a magazine, but still stays quick, direct, and useful for everyday reading.',
    ],
    values: [
      {
        title: 'Reading-first experience',
        description: 'We prioritize clear hierarchy, roomy article cards, and legible detail pages so readers can settle into the writing.',
      },
      {
        title: 'Editorial discovery',
        description: 'Categories, related posts, search, and archive layouts help readers jump from a single article into a larger conversation.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We keep navigation direct, copy specific, and sections purposeful so the site feels like a publication people can return to.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Pitch a story, ask a question, or talk to the editorial desk.',
    description: 'Send article pitches, contributor questions, corrections, partnership notes, or reader feedback. The form is tuned for publication work, not generic support noise.',
    formTitle: 'Write to the desk',
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
