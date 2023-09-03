'use client'

import { useNotesContext } from '@/context/NotesContext'
import { FNote } from '@/interfaces/FNote'
import React, { useState } from 'react'

export default function NotesForm (): JSX.Element {
  const { handleSubmit } = useNotesContext()
  const [note, setNote] = useState<FNote>({
    title: '',
    content: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={e => handleSubmit(e, note)} className='flex flex-col justify-center item-center lg:w-1/5 my-2 gap-3'>
      <input
        name='title'
        className='w-full text-black rounded p-1 focus:outline-none focus:ring-4 focus:ring-blue-500'
        type='text'
        placeholder='Title'
        onChange={handleChange}
        value={note.title}
      />
      <textarea
        name='content'
        className='w-full text-black rounded p-1 focus:outline-none focus:ring-4 focus:ring-blue-500'
        placeholder='Description'
        cols={20}
        rows={3}
        onChange={handleChange}
        value={note.content}
      />

      <button className='p-2 px-5  bg-blue-600 rounded-md hover:bg-blue-700'>Crear</button>
    </form>
  )
}
