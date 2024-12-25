import React from 'react'
import './UserCard.css'


export default function UserCard(props) {
  return (
    <>
      

        <div className="card">
            <h2>{props.name}</h2>
          <img src={props.pic} alt="user" />
          <p>I am a Web Developer and app developer. Now i am studying in Bs- Computer Science Semeter.</p>
           <button>Hire Me </button>
         </div>
      

    </>
  )
}
