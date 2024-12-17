import TodoItem from './TodoItem'

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function fetchTodos() {
  try {
    const response = await fetch('http://localhost:3001/todos')
    const todos: Todo[] = await response.json()
    return todos
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack)
    }
  }
}

export default async function TodoList() {
  const todos = await fetchTodos()

  if (!todos || todos.length === 0) {
    return <p>Todo 리스트가 없습니다.</p>
  }

  const sortedTodos = todos.reverse()

  return (
    <>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  )
}
