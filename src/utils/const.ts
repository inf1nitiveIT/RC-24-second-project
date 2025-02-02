const BASE_ROUND_TIME = 20;
const MAX_GRID_SIZE = 6;
const ROUND_TIME_INCREMENT = 40;

const uniqueColors = [
  'red', 'blue', 'green', 'yellow',
  'cyan', 'magenta', 'black', 'white',
  'orange', 'purple', 'lime', 'teal',
  'brown', 'pink', 'navy', 'gold',
  'chartreuse', 'turquoise'
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
