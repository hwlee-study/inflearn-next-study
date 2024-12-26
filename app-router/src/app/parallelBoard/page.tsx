import wait from '@/src/lib/wait'

export default async function ParallelBoardPage() {
  await wait(2000)
  return <div>Parallel Board Page</div>
}
