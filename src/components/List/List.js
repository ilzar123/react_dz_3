import React from 'react'
import ToDoCard from '../TodoCard/ToDoCard'

const List = ({ list, setList, filtered, setFiltered, handleDone }) => {
  return (
    <>
    {filtered.map((todo) => <ToDoCard
    key={todo.id} 
    todo={todo}
    list={list}
    filtered={filtered}
    setFiltered={setFiltered}
    setList={setList}
    handleDone={handleDone}
    />)}
    </>
  )
}

export default List