import { HomeImage } from '../types/home';

const homerightgroup: Omit<HomeImage, 'id'>[] = [
  {
    image: '/assets/icons/wifi.svg.svg',
    alt: 'Wifi',
    Width:201.5,
    Height:126.33
  },
  {
    image: '/assets/icons/plan.svg.svg',
    alt: 'plan',
     Width:169,
    Height:169
  },
  {
    image: '/assets/icons/converter.svg.svg',
    alt: 'converter',
     Width:155,
    Height:153
  },
  {
    image: '/assets/icons/manage.svg.svg',
    alt: 'manage',
     Width:230,
    Height:128
  },
  {
    image: '/assets/icons/code.svg.svg',
    alt: 'code',
     Width:152,
    Height:153
  },
];
export const HomeRightGroup: HomeImage[] = homerightgroup.map((item, index) => ({
  ...item,
  id: index + 1,
}));

// left
const homeleftgroup: Omit<HomeImage, 'id'>[] = [
  {
    image: '/assets/icons/pics.svg.svg',
    alt: 'Wifi',
    Width:173,
    Height:173
  },
  {
    image: '/assets/icons/Group.svg',
    alt: 'plan',
     Width:58,
    Height:58
  },
  {
    image: '/assets/icons/pdf.svg.svg',
    alt: 'converter',
     Width:141,
    Height:141
  },
  {
    image: '/assets/icons/teamwork.svg.svg',
    alt: 'manage',
     Width:226.9,
    Height:114
  },
  {
    image: '/assets/icons/secure.svg.svg',
    alt: 'code',
     Width:175,
    Height:176
  },
];
export const HomeLeftGroup: HomeImage[] = homeleftgroup.map((item, index) => ({
  ...item,
  id: index + 1,
}));