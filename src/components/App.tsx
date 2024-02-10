import Container from './Container/Container'
import Header from './Header/Header'
import { InputForm } from './InputForm/InputForm'

function App() {
  return (
    <>
      <Header />
      <Container>
        <InputForm />
        {/* <ToDoList /> */}
      </Container>
    </>
  )
}

export default App
