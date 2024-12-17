import {addTodo} from '@/src/lib/actions'

export default function Form() {
  return (
    <form action={addTodo} className="flex items-center gap-2">
      <input
        type="text"
        name="title"
        className="flex-grow w-full p-1 text-2xl rounded-l"
        placeholder="새로운 할 일을 추가하세요"
      />
      <button type="submit">submit</button>
    </form>
  )
}
