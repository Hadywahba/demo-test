import { headerSidebarMenu } from '../types/header-menus';

const headersidebarcolumnItems: Omit<headerSidebarMenu, 'id'>[] = [
  {
    name: 'How it works',
  },
  {
    name: 'All apps',
  },
  {
    name: 'Pricing',
  },
  {
    name: 'For Teams',
  },
  {
    name: 'Blog',
  },
  {
    name: 'Podcast',
  },
  {
    name: '|',
  },
  {
    image: '/assets/icons/en-logo.svg',
    alt: 'USA',
  },
  {
    name:'Sign In',
    link:'/'
  },
  {
    name:'Try free',
    link:'/'
  }
];

export const headerSidebar: headerSidebarMenu[] = headersidebarcolumnItems.map(
  (item, index) => ({
    ...item,
    id: index + 1,
  }),
);

// mobile sidebsr
const headermobliesidebarcolumnItems: Omit<headerSidebarMenu, 'id'>[] = [
  {
    name: 'How it works',
  },
  {
    name: 'All apps',
  },
  {
    name: 'Pricing',
  },
  {
    name: 'For Teams',
  },
  {
    name: 'Blog',
  },
  {
    name: 'Podcast',
  },

  {
    name:'Sign In',
    link:'/'
  },
  {
    name:'Try free',
    link:'/'
  }
];

export const headerMobileSidebar: headerSidebarMenu[] = headermobliesidebarcolumnItems.map(
  (item, index) => ({
    ...item,
    id: index + 1,
  }),
);


