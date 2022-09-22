import React from 'react'
import Quotes from '../styles/Quotes.css'


const Button = ({color}) => {
  return (
    <div>
        <button className='btn' style={{background: color}}>&#62;</button>
    </div>
  )
}

export default Button