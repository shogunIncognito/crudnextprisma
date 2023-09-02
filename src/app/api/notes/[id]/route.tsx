import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'
import { Prisma } from '@prisma/client'

interface Params {
  params: {
    id: string
  }
}

export async function GET (request: Request, { params }: Params): Promise<NextResponse | undefined> {
  try {
    const { id } = params

    const note = await prisma.note.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (note == null) return NextResponse.json({ message: 'Note not found' }, { status: 404 })

    return NextResponse.json(note)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
  }
}

export async function PUT (request: Request, { params }: Params): Promise<NextResponse | undefined> {
  try {
    const body = await request.json()
    const { id } = params

    const updatedNote = await prisma.note.update({
      where: {
        id: Number(id)
      },
      data: body
    })

    return NextResponse.json(updatedNote)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code)
      if (error.code === 'P2025') return NextResponse.json({ message: 'Note not found' }, { status: 404 })
    }

    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
  }
}

export async function DELETE (request: Request, { params }: Params): Promise<NextResponse | undefined> {
  try {
    const { id } = params

    const deletedNote = await prisma.note.delete({
      where: {
        id: Number(id)
      }
    })

    return NextResponse.json(deletedNote)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code)
      if (error.code === 'P2025') return NextResponse.json({ message: 'Note not found' }, { status: 404 })
    }

    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
  }
}
