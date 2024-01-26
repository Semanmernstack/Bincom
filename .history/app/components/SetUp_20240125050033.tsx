import React from 'react'
interface B {
    id: string
    title: string
    image: string
}


function SetUp({id, title, image}:B) {
  return (
    <div>
        <img src={image} alt="image" className='h-24 w-24' />
        <h1>{title}</h1>
    </div>
  )
}

export default SetUp