import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({
   type: 'INCREMENT',
   incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
   type: 'DECREMENT',
   decrementBy
})

const setCount = ({ count = 0 } = {}) => ({
   type: 'SET',
   count
})

const resetCount = () => ({
   type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return {
            count: state.count + action.incrementBy
         }

      case 'DECREMENT':
         return {
            count: state.count - action.decrementBy
         }

      case 'RESET':
         return {
            count: state.count = 1
         }

         case 'SET':
            return {
               count: action.count
            }

      default:
         return state
   }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
   console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 20 }))
store.dispatch(decrementCount({ decrementBy: 50 }))
store.dispatch(decrementCount())

store.dispatch({
   type: 'INCREMENT',
   incrementBy: 5
})

store.dispatch({
   type: 'DECREMENT',
   decrementBy: 10
})

store.dispatch(setCount({ count: 10 }))

store.dispatch({
   type: 'SET',
   count: 100
})

store.dispatch(resetCount())