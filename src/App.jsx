import React from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const App = () => {

  const expenses = 
    [
    {title: 'Household Expense', amount: 25000, date: new Date(2023, 8, 27)},
    {title: 'Travel Expense', amount: 1300, date: new Date(2023, 4, 27)},
    {title: 'Education Fees', amount: 5000, date: new Date(2023, 5, 27)},
    {title: 'New Desk(Wooden)', amount: 450, date: new Date(2023, 6, 27)}
    ];


  return (
    <div>
      <NewExpense/>
     <Expenses items={expenses}/>
    </div>
  )
}

export default App