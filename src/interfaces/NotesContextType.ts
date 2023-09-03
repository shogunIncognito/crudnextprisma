import { Note } from '@prisma/client'
import { FNote } from './FNote'

export interface NotesContextType {
  notes: Note[]
  refreshNotes: () => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, note: FNote) => void
  handleDelete: (id: number) => void
}
