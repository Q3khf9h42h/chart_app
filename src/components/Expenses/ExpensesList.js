import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import './ExpensesList.css';
const ExpensesList = props => {
    // let expensesContent=<p>No expenses found.</p>;
   if(props.items.length===0){
        return <h2 className="expense-list_fallback">Found no expenses.</h2>
    }
     return (
     <ul className ='expense-list'>
    { props.items.map((expense)=>(
            <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        ))};
        
    </ul>
        
     );
};
export default ExpensesList