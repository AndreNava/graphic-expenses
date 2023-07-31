import React, {useState} from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

function Expenses (props){
  const [filteredYear, setFilteredYear]= useState('2020'); //se define el valor inicial de filtered y se cre funcion setFilter

  const filterChangeHandler = (selectedYear) =>{ 
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) =>{ //se filtra el item
    return expense.date.getFullYear().toString() === filteredYear //devuelve t/f deacuerdo al expense.date
  });

  return(
    <div>
    <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
    );
}

export default Expenses;