import { ReactNode } from 'react'

export default function ParallelBoardLayout({
  children,
  boardList,
  comments,
  admin,
}: {
  children: ReactNode
  boardList: ReactNode
  comments: ReactNode
  admin: ReactNode
}) {
  const isAdmin = true

  return (
    <div>
      Parallel Board Layout
      <br />
      {isAdmin && (
        <div className="flex-col">
          <h1 className="font-bold text-lg">
            Parallel 사용 시 조건 부 노출 가능 : admin true 일 때만 노출
          </h1>
          <div className="border border-blue-400">{admin}</div>
        </div>
      )}
      {children}
      {boardList}
      {comments}
    </div>
  )
}
