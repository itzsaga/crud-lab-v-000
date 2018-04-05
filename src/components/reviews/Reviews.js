import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
  render () {
    const { store, restaurantId } = this.props
    const resReviews = store.getState().reviews.filter(r => r.restaurantId === restaurantId)
    const reviews = resReviews.map((review, index) => {
      return <Review store={store} key={index} review={review} />
    })

    return (
      <div>
        <ul>
          {reviews}
        </ul>
      </div>
    )
  }
}

export default Reviews
