import React, { useState } from 'react'
import elements from './data'
import './accordion.css'
import SingleQuestion from './SingleQuestion'
function Accordion() {
  const [questions , setQuestions]= useState(elements)
  console.log(questions);
  return (
    <div>
        <h1>this is my accordion</h1>
        {
            questions.map((q) =>{
                return <SingleQuestion {...q} />
            })
        }
        
    </div>
  )
}

export default Accordion