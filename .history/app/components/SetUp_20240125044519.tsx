import React from 'react'
interface B {
    id: string
    title: string
    image: string
}
interface Data {
    
}

function SetUp({id, title, image}:B) {
  return (
    <div>
        <img src={image} alt="image" />
        <h1>{title}</h1>
    </div>
  )
}

export default SetUp