import { RiDeleteBinLine } from 'react-icons/ri'
import { BiCircle, BiChevronDownCircle } from 'react-icons/bi'

interface TodoProps {
  id: number
  title: string
  completed: boolean
}

export const Todo = ({ title, id, completed }: TodoProps) => {
  const handleDelete = () => {
    console.log(`delete ${id}`)
  }

  const handleCompleted = () => {
    console.log(`completed ${id}`)
  }

  return (
    <div className="relative size-full rounded-lg bg-gray-200 p-10 text-gray-600 shadow-md hover:scale-105 focus:scale-105">
      <p className="mb-5 text-center text-lg font-bold">TODO #</p>
      <p className="mb-5 text-center text-lg ">{title}</p>

      {completed ? (
        <button
          className="absolute bottom-0 left-0 p-2 transition-transform duration-200 hover:scale-105 focus:scale-105"
          type="button"
          onClick={handleCompleted}
        >
          <BiChevronDownCircle size={32} />
        </button>
      ) : (
        <button
          className="absolute bottom-0 left-0 p-2 transition-transform duration-200 hover:scale-105 focus:scale-105"
          type="button"
          onClick={handleCompleted}
        >
          <BiCircle size={32} />
        </button>
      )}

      <button
        className="absolute right-0 top-0 p-2 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105"
        type="button"
        onClick={() => handleDelete()}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  )
}
