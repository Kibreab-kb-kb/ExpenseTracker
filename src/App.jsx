import React from 'react'
import Expenses from './components/Expenses/Expenses';

const App = () => {

  const expenses = [
    {title: 'Household Expense', amount: 25000, date: new Date(2023, 8, 27)},
    {title: 'Travel Expense', amount: 1300, date: new Date(2023, 4, 27)},
    {title: 'Education Fees', amount: 5000, date: new Date(2023, 5, 27)}
];


  return (
    <div>
    <Expenses items={expenses}/>
    </div>
  )
}

export default App