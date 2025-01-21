import type { TranslationValues } from './utils/i18n';
import { getPermalink, getAsset } from './utils/permalinks';
import type { CallToAction } from '~/types';

export const socialData = {
  links: [
    {
      ariaLabel: 'youtube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/@PersianFlutter',
    },
    {
      ariaLabel: 'medium',
      icon: 'tabler:brand-medium',
      href: 'https://medium.com/persian-flutter',
    },
    {
      ariaLabel: 'linkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/persianflutter/',
    },
    {
      ariaLabel: 'telegram',
      icon: 'tabler:brand-telegram',
      href: 'https://t.me/persian_flutter',
    },
    {
      ariaLabel: 'x',
      icon: 'tabler:brand-x',
      href: 'https://x.com/PersianFlutter',
    },
  ],
};

// We need to pass translation function to this function

export function headerData(translation: TranslationValues) {
  return {
    links: [
      {
        text: translation.header.menu.about,
        href: '#',
      },
      {
        text: translation.header.menu.cafeFlutter,
        href: '#',
      },
      {
        text: translation.header.menu.community,
        href: '#',
      },
      {
        text: translation.header.menu.team,
        href: '#',
      },
    ],
    actions: [
      {
        text: 'en',
        href: 'https://github.com/onwidget/astrowind',
        target: '_blank',
        position: 'primary',
      } as CallToAction,
      {
        text: 'حمایت مالی',
        href: '/donate',
        target: '_blank',
        position: 'secondary',
      } as CallToAction,
    ] as CallToAction[],
  };
}

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
