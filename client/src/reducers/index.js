import { combineReducers } from "redux";
import filters from "./filters";
import items from "./items";
import categories from "./categories";
export default combineReducers({
  filters,
  all: items,
  categories
});
