'use server'

import { revalidatePath } from 'next/cache'
import { Todo } from '../app/components/TodoList'
import sleep from './sleep'

export async function addTodo(data: FormData) {
  // name이 title인 value값을 가져온다.
  const title = data.get('title')

  await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 1,
      title,
      completed: false,
    }),
  })

  revalidatePath('/')
}

export async function deletedTodo(todo: Todo) {
  const response = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: todo.id,
    }),
  })

  await response.json()
  revalidatePath('/')
}

export async function updateTodo(todo: Todo) {
  const response = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  })

  await response.json()
  await sleep(2000)
  revalidatePath('/')
}
