import { useState } from 'react'
import { BsSave } from 'react-icons/bs'
import { nanoid } from 'nanoid'
import { InputFormProps } from 'types/propTypes'

export const InputForm = ({ addTodo }: InputFormProps) => {
  const [query, setQuery] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newId = nanoid()
    addTodo({ title: query, id: newId, completed: false })
    setQuery('')
  }

  return (
    <form className="relative mx-auto mb-10 w-96" onSubmit={handleSubmit}>
      <button
        className="absolute right-0 top-0 h-14 w-12 text-base font-bold text-gray-700"
        type="submit"
        aria-label="Save"
      >
        <BsSave size="20px" />
      </button>

      <input
        className="h-14 w-full border-b  border-gray-700 bg-transparent px-4 pr-16 text-lg font-light tracking-wide text-gray-700 outline-none transition duration-300 ease-in-out"
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </form>
  )
}
