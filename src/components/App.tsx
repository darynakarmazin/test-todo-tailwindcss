import { useEffect, useState } from 'react'
import Container from './Container/Container'
import Header from './Header/Header'
import { InputForm } from './InputForm/InputForm'
import ToDoList from './ToDoList/ToDoList'
import { TodoProps } from 'types/propTypes'

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([])

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  const saveTodosToLocalStorage = (todos: TodoProps[]) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const addTodo = (todo: TodoProps) => {
    if (todo.title.trim() !== '') {
      const updatedTodos = [...todos, todo]
      setTodos(updatedTodos)
      saveTodosToLocalStorage(updatedTodos)
    }
  }

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
    saveTodosToLocalStorage(updatedTodos)
  }

  const completeTodo = (activeId: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === activeId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(updatedTodos)
    saveTodosToLocalStorage(updatedTodos)
  }

  return (
    <>
      <Header />
      <Container>
        <InputForm addTodo={addTodo} />
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </Container>
    </>
  )
}

export default App
