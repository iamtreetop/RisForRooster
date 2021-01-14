import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCategories = createSelector(
  [selectShop],
  (shop) => shop.categories
);