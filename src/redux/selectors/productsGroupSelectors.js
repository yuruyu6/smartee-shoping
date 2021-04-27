import { createSelector } from 'reselect';

const productsGroup = (state) => state.productsGroup;

const items = (state) => productsGroup(state).items;
const sortParam = (state) => productsGroup(state).sortParam;

export const sortedProductsGroupSelector = createSelector(
  [items, sortParam],
  (items, sortParam) => {
    switch (sortParam) {
      case 'asc_price':
        return {
          ...items,
          productIds: items.productIds?.sort(
            (a, b) => a.salePrice.min - b.salePrice.min
          ),
        };

      case 'desc_rating':
        return {
          ...items,
          productIds: items.productIds?.sort((a, b) => {
            if (a.averageStar === b.averageStar) {
              return a.salePrice.min < b.salePrice.min
                ? -1
                : a.salePrice.min > b.salePrice.min
                ? 1
                : 0;
            } else {
              return a.averageStar > b.averageStar ? -1 : 1;
            }
          }),
        };
      case 'desc_orders':
        return {
          ...items,
          productIds: items.productIds?.sort(
            (a, b) => b.orders - a.orders
          ),
        };

      default:
        return {
          ...items,
          productIds: items.productIds?.sort(
            (a, b) => a.salePrice.min - b.salePrice.min
          ),
        };
    }
  }
);
