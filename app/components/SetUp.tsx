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
      <img src={image} alt="image" className='h-56 w-56 rounded-xl  object-contain' />
      <div className='flex flex-col items-center justify-between'>
        <h1 className='font-bold text-center font-serif textt-xl md:text-2xl'>{title}</h1>
        <div className='flex items-center justify-between gap-2'>
          <h2 className='font-bold text-slate-400 '>{role}</h2>
          <h2>|</h2>
          <h2 className='text-xs sm:text-sm italic'>{gender}</h2>
        </div>

        <div>

        </div>

      </div>
        
    </div>
  )
}

export default SetUp