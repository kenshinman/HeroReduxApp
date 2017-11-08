export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const REMOVE_HERO = 'REMOVE_HERO';

export function createCharacter(id){
  return {
    type: CREATE_CHARACTER,
    id
  }
}

export function removeHero(id){
  return {
    type: REMOVE_HERO,
    id
  }
}