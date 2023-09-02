import { Note } from '@prisma/client'
import axios from 'axios'

const api = axios.create({
  baseURL: '/api'
})

export const getNotes = async (): Promise<Note[]> => {
  return await api.get('/notes').then(res => res.data)
}
