import React from 'react'
import classes from './todocard.module.css'
import Button from '../Button/Button'
const ToDoCard = ({ todo, setFiltered, filtered ,handleDone }) => {

    function handleDelete () {
        setFiltered(filtered.filter(i => i.id !== todo.id))
    }

  return (
    <div className={classes.wrapperCard}>
         <div className={todo.completed ? [ classes.todoCard, classes.done ] : classes.todoCard }>
        <h3>{todo.title}</h3>
    </div>
    <Button onClick={handleDone} id={todo.id}>Done</Button>
    <button onClick={handleDelete} className={classes.buttonDelete}>delete</button>
    </div>
  )
}

export default ToDoCard