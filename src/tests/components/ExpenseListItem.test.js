import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

const expense = expenses[0]

test('should render ExpenseListItem with the expense provided', () => {
   const wrapper = shallow(<ExpenseListItem {...expense}/>)
   expect(wrapper).toMatchSnapshot()
})