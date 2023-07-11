import './ExpenseItem.css';
function ExpenseItem(){
    return(
        <div className='expense-item' > 
            <div>jul 11 2023</div>
            <div className="expense-item__description">
                <h2>car insurance</h2>
                <div className='expense-item__price '>294.67</div>
            </div>
        </div>
    )
}

export default ExpenseItem;