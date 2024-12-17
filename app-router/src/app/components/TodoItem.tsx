import Link from 'next/link'
import { Todo } from './TodoList'
import { deletedTodo } from '@/src/lib/actions'
import Checkbox from './Checkbox'

export default function TodoItem(todo: Todo) {
  return (
    <form className="my-4 flex justify-between items-center">
      <label htmlFor="completed" className="text-2xl hover:underline">
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div className="flex items-center gap-4">
        <Checkbox {...todo} />
        <button
          formAction={async () => {
            'use server'
            await deletedTodo(todo)
          }}
        >
          X
        </button>
      </div>
    </form>
  )
}
