import React,{useState} from "react";//importing some dependecy
import './ExpenseForm.css';//importing 

const ExpenseForm = (props) => {
    //using multiple state

    const [Title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');

    const titleChangeHandler=(event)=>{
        setTitle(event.target.value);
    }



    const amountChangeHandler=(event)=>{
        setAmount(event.target.value);
    }

    const dateChangeHandler=(event)=>{
        setDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const ExpenseData={
            title:Title,
            amount:amount,
            date:new Date(date)
        }

        props.onSaveExpenseData(ExpenseData); 

        setTitle('')
        setAmount('')
        setDate('')

    }

    //returning the jsx


    return ( 
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls"></div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type="text" 
                    value={Title}
                    onChange={titleChangeHandler}
                    /> 
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                     type="number" 
                     min='0.01' 
                     step='0.01' 
                     value={amount}
                     onChange={amountChangeHandler}
                     /> 
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" 
                    min='2019-01-01' 
                    max='2022-12-31' 
                    value={date}
                    onChange={dateChangeHandler}
                    /> 
                </div>
                <p>Title: {Title}</p>
                <p>Amount:{amount}</p>
                <p>Date:{date}</p>

                <div className="new-expense__actions"> 
                    <button type='submit'>Add Expnese</button>
                </div>
        </form>
     );
}
 
export default ExpenseForm;//exporting expense form