import axios from 'axios'
import config from '../config/config'

const api = axios.create({baseURL: config.API_ROOT_URL})

// Order fetch cart by status

const getAllOrders = async () => {
  try {
    return await api.get(`/api/cart/get-all`)
  } catch (e) {
    console.error(e)
  }
}

export default  getAllOrders();
