import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render () {
    const restaurants = this.props.store.getState().restaurants.map((r) => {
      return <Restaurant restaurant={r} store={this.props} />
    })
    return (
      <ul>
        {restaurants}
      </ul>
    )
  }
}

export default Restaurants
