import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css';

function NewExpense (props) {
    const [isEditing, setIsEditing] = useState(false);//Se inicializa el editign en falso

    const saveExpenseDataHandler = (enteredExpenseData) =>{ //Generar una funcion para transmitir datos del hijo
        const expenseData= {
            ...enteredExpenseData, //se pasan los datos del hijo guardados
            id: Math.random().toString() // se agrega un id
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData) //se importa el dato mediante este funcion para el App.js
        setIsEditing(false);//Esto es cuando se manda la data se quita el formulario 
    };

    const startEditingHandler = ()=>{ //Onclick button se pasa a true isEditing mediante funcion
        setIsEditing(true);
    }

    const stopEditingHandler = ()=>{//Al momento de cancelar el formulario para agregar
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}> Add New Expense </button>} {/*si el editando es falso*/}
            {isEditing && (
            <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCanceledExpenseData={stopEditingHandler}
            />
            )} {/*si el editando es true hacer lo que esta despues &&*/}  
        </div>
    );
};

export default NewExpense