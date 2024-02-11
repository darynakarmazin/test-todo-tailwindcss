export interface TodoListProps {
  todos: TodoProps[]
  deleteTodo: (id: string) => void
  completeTodo: (id: string) => void
}

export interface TodoProps {
  id: string
  title: string
  completed: boolean
}

export interface TodoComponentProps {
  id: string
  title: string
  completed: boolean
  deleteTodo: (id: string) => void
  completeTodo: (id: string) => void
}

export interface InputFormProps {
  addTodo: (todo: TodoProps) => void
}
