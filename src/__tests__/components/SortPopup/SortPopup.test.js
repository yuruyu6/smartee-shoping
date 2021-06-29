import { fireEvent, render } from '@testing-library/react';
import SortPopup from '../../../components/SortPopup/SortPopup';

describe('SortPopup component', () => {
  const SORT_TYPES = [
    { name: 'цене', type: 'asc_price' },
    { name: 'рейтингу', type: 'desc_rating' },
    { name: 'количеству заказов', type: 'desc_orders' },
  ];
  const START_SORT_TYPE_NAME = SORT_TYPES[0].name;
  const TEST_SORT_TYPE_VALUE_INDEX = SORT_TYPES.length - 1;
  const onClickSortTypeMock = jest.fn();

  it('displays active sort type when component is rendered', () => {
    const { getByText } = render(
      <SortPopup
        items={SORT_TYPES}
        activeSortType={SORT_TYPES[0]}
        onClickSortType={onClickSortTypeMock}
      />
    );

    expect(getByText(START_SORT_TYPE_NAME)).toBeInTheDocument();
  });

  it('renders SortPopupOption component when clicked on sort popup button', () => {
    const { getByText, queryByTestId } = render(
      <SortPopup
        items={SORT_TYPES}
        activeSortType={SORT_TYPES[0]}
        onClickSortType={onClickSortTypeMock}
      />
    );

    expect(queryByTestId('sortPopupOptions')).toBeNull();
    fireEvent.click(getByText(START_SORT_TYPE_NAME));

    expect(queryByTestId('sortPopupOptions')).toBeInTheDocument();
  });

  it('calls onClickSortType function when clicked on sort type', () => {
    const { getByText, getAllByRole } = render(
      <SortPopup
        items={SORT_TYPES}
        activeSortType={SORT_TYPES[0]}
        onClickSortType={onClickSortTypeMock}
      />
    );

    fireEvent.click(getByText(START_SORT_TYPE_NAME));
    fireEvent.click(getAllByRole('option')[TEST_SORT_TYPE_VALUE_INDEX]);

    expect(onClickSortTypeMock.mock.calls[0][0]).toBe(
      SORT_TYPES[TEST_SORT_TYPE_VALUE_INDEX].type
    );
  });

  describe('keys behavior', () => {
    it('focuses option when ArrowUp or ArrowDown key down', () => {
      const { getByText, getAllByRole } = render(
        <SortPopup
          items={SORT_TYPES}
          activeSortType={SORT_TYPES[0]}
          onClickSortType={onClickSortTypeMock}
        />
      );

      fireEvent.click(getByText(START_SORT_TYPE_NAME));
      fireEvent.keyDown(getAllByRole('option')[2], {
        key: 'ArrowUp',
      });
      expect(getAllByRole('option')[1]).toHaveFocus();

      fireEvent.keyDown(getAllByRole('option')[0], {
        key: 'ArrowDown',
      });
      expect(getAllByRole('option')[1]).toHaveFocus();
    });

    it('changes active sort type when Space or Enter key down', () => {
      const { getByText, getAllByRole } = render(
        <SortPopup
          items={SORT_TYPES}
          activeSortType={SORT_TYPES[0]}
          onClickSortType={onClickSortTypeMock}
        />
      );

      fireEvent.click(getByText(START_SORT_TYPE_NAME));
      fireEvent.keyDown(getAllByRole('option')[TEST_SORT_TYPE_VALUE_INDEX], {
        key: 'Enter',
      });
      expect(onClickSortTypeMock.mock.calls.length).toBe(1);
      expect(onClickSortTypeMock.mock.calls[0][0]).toBe(
        SORT_TYPES[TEST_SORT_TYPE_VALUE_INDEX].type
      );

      fireEvent.click(getByText(START_SORT_TYPE_NAME));
      fireEvent.keyDown(getAllByRole('option')[TEST_SORT_TYPE_VALUE_INDEX], {
        key: ' ',
      });
      expect(onClickSortTypeMock.mock.calls.length).toBe(2);
      expect(onClickSortTypeMock.mock.calls[1][0]).toBe(
        SORT_TYPES[TEST_SORT_TYPE_VALUE_INDEX].type
      );
    });
  });
});
