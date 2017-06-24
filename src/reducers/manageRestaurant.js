import cuid from 'cuid'
export const cuidFn = cuid

export default function manageRestaurants (state = { restaurants: [], reviews: [] }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      // const restaurant = Object.assign({}, action.restaurant, { id: id })
      // return { restaurants: state.restaurants.concat(restaurant) }
      const restaurant = { ...action.restaurant, id: cuid() }
      return { restaurants: [...state.restaurants, restaurant] }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(r => r.id !== action.id)
      return { restaurants }

    case 'ADD_REVIEW':
      const review = { ...action.review, id: cuid() }
      return { reviews: [...state.reviews, review] }
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(r => r.id !== action.id)
      return { reviews }

    default:
      return state
  }
}
