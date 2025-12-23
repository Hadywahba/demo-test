import { AuthButton } from '../types/auth-button';

const authbutton: Omit<AuthButton, 'id'>[] = [
  {
    name: 'Try free for 7 days',
  },
  {
    image: '/assets/icons/apple.svg',
    alt:'apple'
  },
  {
    image: '/assets/icons/google.svg',
     alt:'google'
  },
];
export const authButton: AuthButton[] = authbutton.map((item, index) => ({
  ...item,
  id: index + 1,
}));
