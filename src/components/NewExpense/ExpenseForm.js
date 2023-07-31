import React, {useState} from "react";

import './ExpenseForm.css';

function ExpenseForm (props) {
    const [enteredTitle, setEnteredTitle] =useState(''); //se pasa un string porque es lo que lee el target.value
    const [enteredAmount, setEnteredAmount] =useState('');
    const [enteredDate, setEnteredDate] =useState('');

    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: '',
    //});

    const titleChangeHandler= (event)=> {
        setEnteredTitle(event.target.value); //con solo poner el event de arriba sabe que el evento sera onChange
        //setUserInput({
        //    ...userInput, //solo toma el objeto y sobreescribe el nuevo valor mandado
        //    enteredTitle: event.target.value,
        //});
    };//con el .target.value se obtiene el valor en cada cambio

    const amountChangeHandler= (event)=> {
        setEnteredAmount(event.target.value); //con solo poner el event de arriba sabe que el evento sera onChange
        //setUserInput({
        //    ...userInput, //solo toma el objeto y sobreescribe el nuevo valor mandado
        //    enteredAmount: event.target.value,
        //});
    };

    const dateChangeHandler= (event)=> {
        setEnteredDate(event.target.value); //con solo poner el event de arriba sabe que el evento sera onChange
        //setUserInput({
        //    ...userInput, //solo toma el objeto y sobreescribe el nuevo valor mandado
        //    enteredDate: event.target.value,
        //});
    };

    const submitHandler= (event) => {
        event.preventDefault();//Para no enviar el req y que no se refresque pantalla

        const expenseData ={ //Contruyendo el objeto con los datos obtenidos
            title: enteredTitle,
            amount: +enteredAmount, //Que sea numero
            date: new Date(enteredDate) //Convirtiendo el tipo string de la fecha a tipo fecha
        };
        props.onSaveExpenseData(expenseData);//Valor que se va a enviar a la funcion que se ejecuta en NewExpense
        setEnteredTitle('');// Para vaciar el input
        setEnteredAmount('');// Para vaciar el input
        setEnteredDate('');// Para vaciar el input
    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" 
                onChange={titleChangeHandler} 
                value={enteredTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="numbre" 
                min='0.01' step='0.01' 
                onChange={amountChangeHandler} 
                value={enteredAmount} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                type="date" 
                min='2019-01-01' max='2022-12-31' 
                onChange={dateChangeHandler} 
                value={enteredDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCanceledExpenseData}> Cancel</button>
            <button type="submit"> Add Expense </button>
        </div>
    </form>
    );
};

export default ExpenseForm