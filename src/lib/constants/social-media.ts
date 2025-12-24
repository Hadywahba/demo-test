import { SocialMedia } from '../types/social-media';

const socialmedia: Omit<SocialMedia, 'id'>[] = [
  {
    icon: '/assets/icons/t.svg',
    alt: 'twitter',
    text1:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    text2: 'Arash Pourhabibi',
    text3: '@ArashPourhabibi',
    bgColor: 'bg-[#71719A]',
    w:22,
    h:18
  },
  {
    icon: '/assets/icons/SVG.svg',
    alt: 'instagram',
    text1:
      'My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.',
    text2: 'Mauricio Sanchez',
    text3: '@m741s',
    bgColor: 'bg-[#D9AE89]',
    w:19,
    h:32
  },
  {
    icon: '/assets/icons/f.svg',
    alt: 'facebook',
    text1:
      'For those of you thatwonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!',
    text2: 'Meredith Sweet',
    text3: '@meredith.sweet.silberstein',
    bgColor: 'bg-[#765070]',
    w:9,
    h:32
  },
  
];
export const sociaMedia: SocialMedia[] = socialmedia.map((item, index) => ({
  ...item,
  id: index + 1,
}));
