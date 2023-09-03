import { FNote } from '@/interfaces/FNote'
import { Note } from '@prisma/client'
import axios from 'axios'

const api = axios.create({
  baseURL: '/api'
})

export const getNotes = async (): Promise<Note[]> => {
  return await api.get('/notes').then(res => res.data)
}

export const createNote = async (note: FNote): Promise<Note> => {
  return await api.post('/notes', note).then(res => res.data)
}

export const deleteNote = async (id: number): Promise<Note> => {
  return await api.delete(`/notes/${id}`).then(res => res.data)
}
