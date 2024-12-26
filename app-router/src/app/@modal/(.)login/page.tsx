'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function LoginModal() {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])
  return (
    <dialog ref={dialogRef} onClick={() => router.back()}>
      <button onClick={() => dialogRef.current?.close()}>X</button>
      <h1>modal login page</h1>
    </dialog>
  )
}
