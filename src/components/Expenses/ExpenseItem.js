import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

function ExpenseItem (props){
  const [title, setTitle] = useState(props.title); // [var, funcion a usar] = estado (leer el dato enviado en title) esto es un decontructivo
  console.log(title);
  
  const clickHandler = ()=> {
    setTitle('Updated!!');
  }; //Es lo que hara al captar el evento click

    return ( 
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div> 
        <button onClick={clickHandler}> Change Title</button>
      </Card>
    </li> // se usa como envoltura en lugar del div
    );//usando Card como etiqueta se jala los estilos css que tenemos en ese componente 
}

export default ExpenseItem;