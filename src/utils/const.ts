const BASE_ROUND_TIME = 20;
const MAX_GRID_SIZE = 6;
const ROUND_TIME_INCREMENT = 40;

const uniqueColors = [
  'red', 'blue', 'green', 'yellow',
  'orange', 'purple', 'pink', 'cyan',
  'brown', 'lime', 'teal', 'maroon',
  'navy', 'olive', 'coral', 'turquoise',
  'lavender', 'indigo', 'violet', 'gold',
  'silver', 'beige', 'peach', 'tan',
  'aqua', 'salmon', 'chocolate', 'plum',
  'crimson', 'ivory', 'azure', 'amber',
  'mint', 'mustard', 'orchid', 'chartreuse'
];

const PagesLinks = {
  MAIN: '/',
  RULES: '/rules',
  GAME: '/game',
  CONTACT: '/contact'
} as const;

export const navigationLinks = [
  { id: 1, text: 'Rules', to: PagesLinks.RULES },
  { id: 2, text: 'Contact us', to: PagesLinks.CONTACT },
];

export {PagesLinks, uniqueColors, BASE_ROUND_TIME, MAX_GRID_SIZE, ROUND_TIME_INCREMENT};
