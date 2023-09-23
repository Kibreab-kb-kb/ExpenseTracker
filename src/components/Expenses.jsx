import React from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';


const Expenses = ({items}) => {
  return (
    <Card className='expenses'>
    {items.map((expense,index)=>(
      <ExpenseItem
      key={index}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
     ))}
    </Card>
  )
}

export default Expenses