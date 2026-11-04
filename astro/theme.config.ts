// Settings for the theme (private submodule astro/theme), carried over from _config.yml and _config.icarus.yml
import type { IcarusConfig } from 'astro-theme-icarus-thiennguyen';

export default {
  site: {
    title: "Thien Nguyen's Blog",
    description:
      'Sharing Knowledge, Experiences, and Insights on Software Development, Technology, and Life.',
    author: 'Thien Nguyen',
    pageSize: 3,
    logo: {
      light: '/assets/img/logo-cropped.svg',
      dark: '/assets/img/logo-dark-cropped.svg',
      lightCompact: '/assets/img/logo-light-compact.svg',
      darkCompact: '/assets/img/logo-dark-compact.svg',
    },
    comments: { repo: 'thiennguyen93/thiennguyen93.github.io' },
  },
  profile: {
    name: 'Thien Nguyen',
    pronunciation: 'Thiện Nguyễn · IPA /tiːɛn ˈwɪn/',
    title: 'Software Engineer',
    location: 'Ho Chi Minh City, Vietnam',
    // Same Gravatar image the Hexo site renders today
    avatar: 'https://www.gravatar.com/avatar/f33784a77f4921fa53466069666d95b2?s=256',
    follow: { label: 'View CV', href: '/cv/' },
    social: [
      { label: 'Github Profile', icon: 'brands:github', href: 'https://github.com/thiennguyen93' },
      { label: 'LinkedIn Profile', icon: 'brands:linkedin-in', href: 'https://www.linkedin.com/in/thiennguyendev' },
      { label: 'Youtube Channel', icon: 'brands:youtube', href: 'https://www.youtube.com/thiennguyenpro' },
      { label: 'Contact me', icon: 'at', href: '/contact/' },
    ],
  },
  menu: [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories/' },
    { label: 'Photos', href: '/categories/photos/' },
    { label: 'Music', href: '/music/' },
    { label: 'CV', href: '/cv/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
  navbarLinks: [{ label: 'QR', icon: 'qrcode', href: '/about/#qr-collection' }],
  languages: {
    current: { label: 'English', flag: '/assets/img/en-us-64x64.png' },
    others: [{ label: 'Tiếng Việt', flag: '/assets/img/vi-vn-64x64.png', origin: 'https://vi.thiennguyen.dev' }],
  },
  links: [
    { label: 'Kira - AWS Desktop Client for macOS', href: '/2026/06/19/nhat-ky/2026-06-19-gioi-ung-dung-kira/' },
    { label: 'World Flags Quiz', href: '/games/world-flags-quiz/' },
  ],
  footerLinks: [
    { label: 'Creative Commons', icon: 'brands:creative-commons', href: 'https://creativecommons.org/' },
    { label: 'Attribution 4.0 International', icon: 'brands:creative-commons-by', href: 'https://creativecommons.org/licenses/by/4.0/' },
    { label: 'View Profile on GitHub', icon: 'brands:github', href: 'https://github.com/thiennguyen93' },
  ],
} satisfies IcarusConfig;
