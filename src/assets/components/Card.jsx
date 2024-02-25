import React from 'react'
import {Rating} from './Rating'

export const Card = ({name, image, rating, website}) => {
  return (
    <div className='Card'>
        <h1>{name}</h1>
        <img className='card--image' src={image}></img>
        <Rating stars={rating}/>
        <button className='card--button'><a className='card--button--link' target="_blank" href={website}>Go to Website</a></button>
    </div>
  )
}
