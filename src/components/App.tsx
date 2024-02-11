import { useState } from 'react'
import Container from './Container/Container'
import Header from './Header/Header'
import { InputForm } from './InputForm/InputForm'
import ToDoList from './ToDoList/ToDoList'
import { TodoProps } from 'types/propTypes'

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([])

  const addTodo = (todo: TodoProps) => {
    if (todo.title.trim() !== '') {
      setTodos([...todos, todo])
    }
  }

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const completeTodo = (activeId: string) => {
    setTodos(
      todos.map((todo) => {
        const { id } = todo
        if (id === activeId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else return todo
      })
    )
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
