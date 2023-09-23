import React from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';


const Expenses = ({items}) => {
  return (
    <div className='expenses'>
    {items.map((expense,index)=>(
      <ExpenseItem
      key={index}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
     ))}
    </div>
  )
}

export default Expenses