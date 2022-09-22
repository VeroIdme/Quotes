import React from 'react'
import quotes from '../quotes/quotes.json'
import { useState } from 'react'
import Button from './Button'
import colors from '../assets/colors.json'
import Quotes from '../styles/Quotes.css'


const QuoteAndAuthor = () => {
  const [indexColors, setindexColors] = useState(0)
  const [index, setindex] = useState(0)
  const managmentHandle = () => {
    const randomIndexColors = Math.floor(Math.random() * colors.length)
    setindexColors(randomIndexColors)
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setindex(randomIndex)
  }
  return (
    <div className='container-principal' style={{background: colors[indexColors].first}}>
      <div className='container-quote'>
        <h2 className='quote' style={{color: colors[indexColors].first}}>" {quotes[index].quote} "</h2>
        <h3 className='author' style={{color: colors[indexColors].first}}>{quotes[index].author}</h3>
        <div className='container-btn' onClick={managmentHandle}><Button color={colors[indexColors].first}/></div>
      </div>
    </div>
  )
}

export default QuoteAndAuthor