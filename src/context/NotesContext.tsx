'use client'

import { FNote } from '@/interfaces/FNote'
import { NotesContextType } from '@/interfaces/NotesContextType'
import { createNote, deleteNote, getNotes } from '@/services/api'
import { Note } from '@prisma/client'
import { createContext, useContext, useEffect, useState } from 'react'

const NotesContext = createContext<NotesContextType>({
  notes: [],
  refreshNotes: () => {},
  handleSubmit: () => {},
  handleDelete: () => {}
})

export function NotesContextProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    refreshNotes()
  }, [])

  const refreshNotes = (): void => {
    getNotes()
      .then(notes => setNotes(notes))
      .catch(err => console.error(err))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, note: FNote): void => {
    e.preventDefault()

    createNote(note)
      .then(() => refreshNotes())
      .catch(err => console.error(err))
  }

  const handleDelete = (id: number): void => {
    deleteNote(id)
      .then(() => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
      })
      .catch(err => console.error(err))
  }

  return (
    <NotesContext.Provider value={{
      notes,
      refreshNotes,
      handleSubmit,
      handleDelete
    }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export function useNotesContext (): NotesContextType {
  return useContext(NotesContext)
}
