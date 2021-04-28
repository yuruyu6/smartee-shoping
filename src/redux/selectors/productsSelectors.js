import { createSelector } from 'reselect';

const products = (state) => state.products;

const items = (state) => products(state).items;
const searchTerm = (state) => products(state).searchTerm;

export const foundProductsSelector = createSelector(
  [items, searchTerm],
  (items, searchTeam) => {
    if (!searchTeam) {
      return items;
    }
    return items.filter((i) =>
      i.title.toLowerCase().includes(searchTeam.toLowerCase())
    );
  }
);
