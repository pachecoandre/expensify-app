import React from 'react'
import { connect } from 'react-redux'
import expensesTotal from '../selectors/expenses-total'

const ExpensesSummary = (props) => (
   <div>
      <p>Displaying {props.expenseCount} expense(s) totalling {props.expensesTotal}</p>
      <p></p>
   </div>
)

const mapStateToProps = (state) => {
   return {
      expenseCount: state.expenses.length,
      expensesTotal: expensesTotal(state.expenses)
   }
}

export default connect(mapStateToProps)(ExpensesSummary)