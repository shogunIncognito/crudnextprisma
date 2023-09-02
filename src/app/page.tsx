'use client'

import { useEffect, useState } from 'react'
import { Note } from '@prisma/client'
import { getNotes } from '@/services/api'
import NotesForm from '@/components/NotesForm'

export default function Home (): JSX.Element {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    getNotes()
      .then(notes => setNotes(notes))
      .catch(err => console.error(err))
  }, [])

  return (
    <main className='flex flex-col m-2 justify-center items-center'>
      <h2 className='font-bold text-2xl my-5'>Crud Prisma Nextjs</h2>
      <NotesForm />
      <section className='flex flex-wrap gap-5 my-10 justify-center'>
        {notes.map(note => (
          <article className='bg-slate-100 shadow-sky-600 text-black p-4 rounded shadow-md' key={note.id}>
            <h3><b>{note.title}</b></h3>
            <p>{note.content}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
