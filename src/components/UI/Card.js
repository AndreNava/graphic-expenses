import './Card.css'

function Card(props){
    const classes = 'card ' + props.className; //definir classes de esta forma para poder leear los className de los otros componentes
    return <div className = {classes} >{props.children}</div>; //el valor en children siempre sera el contenido personalizado entre las etiquetas <>
}

export default Card;