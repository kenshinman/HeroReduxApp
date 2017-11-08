import data from "../data/characters.json";
import { CREATE_CHARACTER, REMOVE_HERO } from "../actions";

export function heroes(state = [], action) {
  switch (action.type) {
    case CREATE_CHARACTER:
      let heroes = [...state, data.find(hero => hero.id === action.id)];
      return heroes;
    case REMOVE_HERO:
      heroes = state.filter(hero => hero.id !== action.id);
      return heroes;
    default:
      return state;
  }
}
