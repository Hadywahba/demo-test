import { HomeSlider } from '../types/home-slider';

const homeslider: Omit<HomeSlider, 'id'>[] = [
  {
    icon: '/assets/icons/play.svg',
    image: '/assets/images/person.png',
    text1:
      'Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.',
    text2: 'Jason Staczek',
  },
  {
    icon: '/assets/icons/play.svg',
    image: '/assets/images/person.png',
    text1:
      'Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.',
    text2: 'Jason Staczek',
  },
  {
    icon: '/assets/icons/play.svg',
    image: '/assets/images/person.png',
    text1:
      'Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.',
    text2: 'Jason Staczek',
  },
  {
    icon: '/assets/icons/play.svg',
    image: '/assets/images/person.png',
    text1:
      'Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.',
    text2: 'Jason Staczek',
  },
];
export const homeSlider: HomeSlider[] = homeslider.map((item, index) => ({
  ...item,
  id: index + 1,
}));
