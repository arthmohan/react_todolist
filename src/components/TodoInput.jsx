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
      <button 
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodos(todoValues)
            setTodoValues('')
          }
        }} 
        onClick={() => {
          handleAddTodos(todoValues)
          setTodoValues('')
        }}
      >
        Add
      </button>
    </header>
  )
}