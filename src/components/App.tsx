import Container from './Container/Container'
import Header from './Header/Header'
import { InputForm } from './InputForm/InputForm'
import ToDoList from './ToDoList/ToDoList'

function App() {
  return (
    <>
      <Header />
      <Container>
        <InputForm />
        <ToDoList />
      </Container>
    </>
  )
}

export default App
