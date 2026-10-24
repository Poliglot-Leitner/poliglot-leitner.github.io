import type { CurriculumSeed } from '../languages';
import { ADJECTIVES_SEEDS } from './adjectives';
import { COLORS_SEEDS } from './colors';
import { NUMBERS_SEEDS } from './numbers';
import { ANIMALS_SEEDS } from './animals';
import { FOOD_SEEDS } from './food';
import { FAMILY_SEEDS } from './family';
import { VERBS_SEEDS } from './verbs';
import { TIME_SEEDS } from './time';
import { HOME_SEEDS } from './home';
import { BODY_SEEDS } from './body';
import { CLOTHING_SEEDS } from './clothing';
import { DIALOGUE_SEEDS } from './dialogues';

export {
  ADJECTIVES_SEEDS,
  COLORS_SEEDS,
  NUMBERS_SEEDS,
  ANIMALS_SEEDS,
  FOOD_SEEDS,
  FAMILY_SEEDS,
  VERBS_SEEDS,
  TIME_SEEDS,
  HOME_SEEDS,
  BODY_SEEDS,
  CLOTHING_SEEDS,
  DIALOGUE_SEEDS,
};

export const ALL_NEW_VOCABULARY_SEEDS: CurriculumSeed[] = [
  ...ADJECTIVES_SEEDS,
  ...COLORS_SEEDS,
  ...NUMBERS_SEEDS,
  ...ANIMALS_SEEDS,
  ...FOOD_SEEDS,
  ...FAMILY_SEEDS,
  ...VERBS_SEEDS,
  ...TIME_SEEDS,
  ...HOME_SEEDS,
  ...BODY_SEEDS,
  ...CLOTHING_SEEDS,
  ...DIALOGUE_SEEDS,
];
