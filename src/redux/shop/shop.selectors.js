import { createSelector } from "reselect";

const CATEGORY_ID_MAP = {
  educational_prints: 1,
  wall_art: 2,
  sheets: 3,
  craft_kits: 4,
};

const selectShop = (state) => state.shop;

export const selectCategories = createSelector(
  [selectShop],
  (shop) => shop.categories
)

export const selectCategoriesForPreview = createSelector(
  [selectCategories],
  (categories) => Object.keys(categories).map((key) => categories[key])
)

export const selectCategory = (categoryUrlParam) =>
  createSelector(
    [selectCategories],
    (categories) =>
      categories.find(
        (category) => category.id === CATEGORY_ID_MAP[categoryUrlParam]
      )
    // (categories) => categories[categoryUrlParam]
  );