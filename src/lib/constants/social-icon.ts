import { SocialIcon } from '../types/social-icon';

const socialicon: Omit<SocialIcon, 'id'>[] = [
  {
    icon: '/assets/icons/facebook.svg',
  },
  {
    icon: '/assets/icons/twitter.svg',
  },
  {
    icon: '/assets/icons/insta.svg',
  },
  {
    icon: '/assets/icons/yout.svg',
  },
];
export const socialIcon: SocialIcon[] = socialicon.map((item, index) => ({
  ...item,
  id: index + 1,
}));
