import { useEffect, useState } from 'react'
import './App.css'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("ITEMS")
    if (localTodos === null) return []
    return JSON.parse(localTodos)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  const toggleItem = (id, completed) => {
    setTodos(currentTodos => {
      return(
        currentTodos.map(todo => {
          if (todo.id === id) {
            return {...todo, completed}
          }
          return todo
        })
      )
    })
  }

  const addItem = (title) => {
    setTodos(currentTodos => {
      return [...currentTodos, {
        id: crypto.randomUUID(),
        title,
        complete: false,
      }]
    })
  }

  const deleteItem = (id) => {
    setTodos(currentTodos => {
      return (
        currentTodos.filter(todo => todo.id !== id)
      )
    })
  } 

  return (
    <>
      <NewTodoForm onSubmit={addItem} />
      <TodoList todos={todos} deleteItem={deleteItem} toggleItem={toggleItem}/>
    </>
  )
}

export default App
