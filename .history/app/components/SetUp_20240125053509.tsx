import React from 'react'
interface B {
    id: string
    title: string
    image: string
    role: string
    gender: string
}


function SetUp({id, title, image, role, gender}:B) {
  return (
    <div className=' p-3 '>
      <img src={image} alt="image" className='h-56 w-56  object-contain' />
      <div className='flex flex-col items-center justify-between'>
        <h1 className='font-bold font-serif textt-xl md:text-2xl'>{title}</h1>
        <div>
          <h2>{role}</h2>
          <h2>{gender}</h2>
        </div>

        <div>

        </div>

      </div>
        
    </div>
  )
}

export default SetUp