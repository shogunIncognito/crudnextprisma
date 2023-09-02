import React from 'react'

export default function NotesForm (): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center item-center w-1/5 my-2 gap-3'>
      <input
        className='w-full text-black rounded p-1 focus:outline-none focus:ring-4 focus:ring-blue-500'
        type='text'
        placeholder='Title'
      />
      <textarea
        className='w-full text-black rounded p-1 focus:outline-none focus:ring-4 focus:ring-blue-500'
        placeholder='Description'
        cols={20}
        rows={3}
      />

      <button className='p-2 px-5  bg-blue-600 rounded-md hover:bg-blue-700'>Crear</button>
    </form>
  )
}
