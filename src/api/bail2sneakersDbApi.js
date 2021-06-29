import axios from 'axios'
import config from '../config/config'

const api = axios.create({baseURL: config.API_ROOT_URL})

// Order fetch cart by status

const getAllOrdersByStatus = async (status) => {
  try {
    const response = await api.get(`/cart/get-all`)

    return response.filter(order => {
      if (order.data.order.history[status] !== null) return order.data
      return []
    })
  } catch (e) {
    console.error(e)
  }
}
