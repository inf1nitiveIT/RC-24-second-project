const PagesLinks = {
  MAIN: '/',
  RULES: '/rules',
  GAME: '/game',
  ABOUT: '/about'
} as const;

export const navigationLinks = [
  { id: 1, text: 'Rules', to: PagesLinks.RULES },
  { id: 2, text: 'About', to: PagesLinks.ABOUT },
];


export {PagesLinks};
