import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

test('add ToDo', () => {
  render(<App />)

  const input = screen.getByPlaceholderText('What do you want to write?')
  fireEvent.change(input, { target: { value: 'New todo' } })

  const addButton = screen.getByRole('button', { name: 'Save' })
  fireEvent.click(addButton)

  const newTodo = screen.getByText('New todo')
  expect(newTodo).toBeInTheDocument()
})

test('delete ToDo', () => {
  render(<App />)

  const value = 'Todo for deleting'

  const input = screen.getByPlaceholderText('What do you want to write?')
  fireEvent.change(input, { target: { value: value } })

  const addButton = screen.getByRole('button', { name: 'Save' })
  fireEvent.click(addButton)

  const deleteButton = screen.getByRole('button', {
    name: `Delete ${value}`
  })
  fireEvent.click(deleteButton)

  const todo = screen.queryByText(value)
  expect(todo).not.toBeInTheDocument()
})
