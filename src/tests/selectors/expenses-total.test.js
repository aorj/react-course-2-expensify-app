import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(expenses[0].amount);
})

test('should correctly add up multiple expense', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(114195);
})