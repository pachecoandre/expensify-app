import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
   const state = expensesReducer(undefined, { type: '@@INIT' })
   expect(state).toEqual([])
})

test('should remove expense by id', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense if id not found', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual(expenses)
})

test('should add an expense', () => {
   const expense = {
      id: 'abc123',
      description: 'rent',
      note: '',
      amount: 10000,
      createdAt: 3000
   }
   const action = {
      type: 'ADD_EXPENSE',
      expense
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual([
      ...expenses,
      expense
   ])
})

test('should edit an expense', () => {
   const description = 'Car installment'
   const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates: {
         description
      }
   }
   const expense = {
      ...expenses[1],
      description
   }
   const state = expensesReducer(expenses, action)
   expect(state[1]).toEqual(expense)
})

test('should not edit an expense if expense not found', () => {
   const description = 'Car installment'
   const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: { description }
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual(expenses)
})