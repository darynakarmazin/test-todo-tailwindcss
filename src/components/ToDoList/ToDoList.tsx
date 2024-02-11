import { Todo } from 'components/Todo/Todo'
import { TodoListProps } from 'types/propTypes'

function ToDoList({ todos, deleteTodo, completeTodo }: TodoListProps) {
  return (
    <div>
      <ul className="mb-10 flex flex-wrap justify-center gap-5 align-middle">
        {todos.length > 0 &&
          todos.map(({ id, title, completed }) => (
            <li
              key={id}
              className="flex h-48 basis-72 flex-col items-center justify-center"
            >
              <Todo
                id={id}
                title={title}
                completed={completed}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ToDoList
