import Container from 'components/Container/Container'
import { FiCheckCircle } from 'react-icons/fi'

function Header() {
  return (
    <header className="mb-0 rounded-b-lg bg-white text-lg font-bold uppercase text-gray-700 shadow-lg">
      <Container>
        <div className="flex items-center justify-start gap-10">
          <FiCheckCircle size="28px" />
          TODO List
        </div>
      </Container>
    </header>
  )
}

export default Header
