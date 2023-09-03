'use client'

import NotesForm from '@/components/NotesForm'
import { useNotesContext } from '@/context/NotesContext'

export default function Home (): JSX.Element {
  const { notes, handleDelete } = useNotesContext()

  return (
    <main className='m-2'>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-2xl my-5'>Crud Prisma Nextjs</h2>
        <NotesForm />
      </div>
      <section className='grid-res gap-5 m-10 lg:mx-32'>
        {notes.map(note => (
          <article className='flex w-full flex-col gap-2 bg-slate-100 shadow-sky-600 text-black p-4 rounded shadow-md' key={note.id}>
            <h3><b>{note.title}</b></h3>
            <p>{note.content}</p>
            <div className='flex gap-2 mt-3'>
              <button>Edit</button>
              <button onClick={() => handleDelete(note.id)} className='hover:text-red-500'>Delete</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
