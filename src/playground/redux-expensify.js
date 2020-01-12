import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE ACTION
const addExpense = (
   {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0 }
) => ({
   type: 'ADD_EXPENSE',
   expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
   }
})

// REMOVE_EXPENSE ACTION
const removeExpense = ({ id }) => ({
   type: 'REMOVE_EXPENSE',
   id: id
})

// EDIT_EXPENSE ACTION
const editExpense = (id, updates) => ({
   type: 'EDIT_EXPENSE',
   id,
   updates
})

// SET_TEXT_FILTER ACTION
const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text
})

// SORT_BY_DATE ACTION
const sortByDate = () => ({
   type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT ACTION
const sortByAmount = () => ({
   type: 'SORT_BY_AMOUNT',
})
// SET_START_DATE ACTION
const setStartDate = (startDate) => ({
   type: 'SET_START_DATE',
   startDate
})
// SET_END_DATE ACTION
const setEndDate = (endDate) => ({
   type: 'SET_END_DATE',
   endDate
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
   switch (action.type) {
      case 'ADD_EXPENSE':
         return [
            ...state,
            action.expense
         ]
      case 'REMOVE_EXPENSE':
         return state.filter(({ id }) => id !== action.id)

      case 'EDIT_EXPENSE':
         return state.map((item) => {
            if (item.id === action.id) {
               return {
                  ...item,
                  ...action.updates
               }

            } else {
               return item
            }
         })

      default:
         return state
   }
}

const filtersReducerDefaultState = {
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            text: action.text
         }
      case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy: 'amount'
         }
      case 'SORT_BY_DATE':
         return {
            ...state,
            sortBy: 'date'
         }
      case 'SET_START_DATE':
         return {
            ...state,
            startDate: action.startDate
         }
      case 'SET_END_DATE':
         return {
            ...state,
            endDate: action.endDate
         }

      default:
         return state
   }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
   return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

      return startDateMatch && endDateMatch && textMatch
   }).sort((a, b) => {
      if (sortBy === 'date') {
         return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
         return a.amount < b.amount ? 1 : -1
      }
   })
}

// Store creation

const store = createStore(
   combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
   })
)

store.subscribe(() => {
   const state = store.getState()
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
   console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -8100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300, createdAt: 1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('Rent'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

// store.dispatch(setStartDate(-999))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))
// store.dispatch(setTextFilter('re'))

const demoState = {
   expenses: [{
      id: 'a1d4-d9b58-7e2b-f34c',
      description: 'October Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
   }],
   filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined
   }
}
