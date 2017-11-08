import { combineReducers } from "redux";

import { characters } from './characters';
import { heroes } from './heroes';

export default combineReducers({
  characters,
  heroes
});
