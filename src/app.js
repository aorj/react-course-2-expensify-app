import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 999 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 100999 }));


const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));