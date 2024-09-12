import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValues, setTodoValues] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodos = [...todos, newTodo]
    persistData(newTodos)
    setTodos(newTodos)
  }

  function handleDeleteTodos(index) {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index)
    persistData(newTodos)
    setTodos(newTodos)
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index]
    setTodoValues(valueToBeEdited)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if(!localStorage)
    {
      return
    }
    let localTodos= localStorage.getItem('todos')
    if(!localTodos)
    {
      return
    }
    localTodos= JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [] )


  return (
    <>
      <TodoInput todoValues={todoValues} setTodoValues={setTodoValues} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </>
  )
}

export default App