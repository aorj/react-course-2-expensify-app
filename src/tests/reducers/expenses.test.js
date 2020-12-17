import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Doll',
    note: '',
    createAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  // const state = expensesReducer(undefined, action);
  // expect(state).toEqual([expense]);
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  // const action = {
  //   type: 'EDIT_EXPENSE',
  //   id: expenses[0].id,
  //   updates: {
  //     description: 'Gummy Bear!',
  //     amount: 99
  //   }
  // };
  // const expense = {...expenses[0],...action.updates}
  // const state = expensesReducer(expenses, action);
  // expect(state[0]).toEqual(expense);

  const amount = 1222000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toEqual(amount);
});


test('should not edit expense if expense not found', () => {
  // const action = {
  //   type: 'EDIT_EXPENSE',
  //   id: -1,
  //   updates: ''
  // };
  // const state = expensesReducer(expenses, action);
  // expect(state).toEqual(expenses);
  const amount = 1222000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});


test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  // const state = expensesReducer(undefined, action);
  // expect(state).toEqual([expense]);
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});