import { Todo } from 'components/Todo/Todo'

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: false
  },
  {
    userId: 1,
    id: 8,
    title: 'quo adipisci enim quam ut ab',
    completed: true
  }
]

function ToDoList() {
  return (
    <div>
      <ul className="mb-10 flex flex-wrap justify-center gap-5 align-middle">
        {todos.length > 0 &&
          todos.map(({ id, title, completed }) => (
            <li
              key={id}
              className="flex h-48 basis-72 flex-col items-center justify-center"
            >
              <Todo id={id} title={title} completed={completed} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ToDoList
