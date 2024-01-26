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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      <img src={image} alt="image" className='h-24 w-24' />
      <div>
        <h1>{title}</h1>
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