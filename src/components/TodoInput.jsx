import React from "react"

export default function TodoInput(props) {
  const { handleAddTodos, todoValues, setTodoValues } = props

  return (
    <header>
      <input 
        value={todoValues} 
        onChange={(e) => setTodoValues(e.target.value)} 
        type="text" 
        placeholder="Enter To-Do..." 
      />
      <button onClick={() => {
        handleAddTodos(todoValues)
        setTodoValues('')
      }}>
        Add
      </button>
    </header>
  )
}