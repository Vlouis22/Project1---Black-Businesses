import React from 'react'

export const Rating = (props) => {
    const star = "⭐";
    const emptyStar = "★"
    const numOfStars = props.stars;
    const totalStars = star.repeat(numOfStars) + emptyStar.repeat(5-numOfStars)

  return (
    <div className='star'>Rating: {totalStars}</div>
  )
}
