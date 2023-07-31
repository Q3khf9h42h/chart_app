import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesList.css';
 import ExpensesList from './ExpensesList';

const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    };
    const filteredExpenses=props.items.filter((expense) =>{
        return expense.date.getFullYear().toString()===filteredYear;
    });
    
    // let ExpensesContent =<p>No expenses found.</p>
    // if(filteredExpenses.length>0){
    //     ExpensesContent =  filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //     key={expense.id}
    //     title={expense.title}
    //     amount={expense.amount}
    //     date={expense.date}
    //     />
    //     ));
    // }


    
    {/* {filteredExpenses.length===0 && <p>No expense found.</p> }
     {filteredExpenses.length===0 ?(
    <p>No expenses found.</p>
    ): (
    
     filteredExpenses.map((expense) =>(
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        /> 

    ))
     )} */}
     return(
        <div>
        <Card className="expenses">
    <expensesFilter 
    selected={filteredYear} 
    onChangeFilter={filterChangeHandler}
    />
     <ExpensesList items={filteredExpenses}/>
    
     </Card>
     </div>

    );
};
export default Expenses;