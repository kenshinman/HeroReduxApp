import data from "../data/characters.json";
import { CREATE_CHARACTER, REMOVE_HERO } from "../actions";

export function characters(state = data, action) {
  switch (action.type) {
    case CREATE_CHARACTER:
      let characters = state.filter(character => {
        return character.id !== action.id;
      });
      return characters;

    case REMOVE_HERO:
      characters = [...state, data.find(hero => hero.id === action.id)];
      return characters;

    default:
      return state;
  }
}
