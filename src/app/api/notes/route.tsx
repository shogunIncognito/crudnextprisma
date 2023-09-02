import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function GET (): Promise<NextResponse | undefined> {
  try {
    const data = await prisma.note.findMany()
    return NextResponse.json(data)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
  }
}

export async function POST (request: Request): Promise<NextResponse | undefined> {
  try {
    const { title, content } = await request.json()

    const newNote = await prisma.note.create({
      data: {
        title,
        content
      }
    })

    return NextResponse.json(newNote)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
  }
}
