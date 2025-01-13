import React, { useState } from 'react'
import './Card.css'

const Card = ({title, description}) => {
    const [name, setName] = useState('Munsif')
  return (
    <div className='card'>
      <img className='cardImage' src="https://avatars.dicebear.com/api/initials/placeholder.svg" alt="placeholder" />
        <h2>{name}</h2>
        <p>{description}</p>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}></input>
    </div>
  )
}

export default Card
