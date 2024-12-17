import Form from './components/Form'
import TodoList from './components/TodoList'

export default function Home() {
  return (
    <div className="max-w-[400px] m-auto pt-20">
      <Form />
      <TodoList />
    </div>
  )
}
