'use client'

import { useOptimistic, useTransition } from 'react'
import { Todo } from './TodoList'
import { updateTodo } from '@/src/lib/actions'

export default function Checkbox(todo: Todo) {
  /**
   * Optimistic 사용 방법
   */
  // const [optimisticTodo, addOptimisticTodo] = useOptimistic(
  //   todo,
  //   (state: Todo, completed: boolean) => ({
  //     ...state,
  //     completed,
  //   })
  // )

  // return (
  //   <input
  //     type="checkbox"
  //     checked={optimisticTodo.completed}
  //     id="completed"
  //     name="comleted"
  //     onChange={async () => {
  //       addOptimisticTodo(!todo.completed)
  //       await updateTodo(todo)
  //     }}
  //     className="min-w-[2rem] min-h-[2rem]"
  //   />
  // )
  const [isPending, startTransition] = useTransition()

  return (
    <input
      type="checkbox"
      checked={todo.completed}
      id="completed"
      name="comleted"
      disabled={isPending}
      onChange={() => startTransition(() => updateTodo(todo))}
      className="min-w-[2rem] min-h-[2rem]"
    />
  )
}
