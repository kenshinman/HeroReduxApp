export const REMOVE_HERO = 'REMOVE_HERO';

export function removeHero(id) {
  return {
    type: REMOVE_HERO,
    id
  }
}