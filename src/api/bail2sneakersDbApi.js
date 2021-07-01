import axios from 'axios'
import config from '../config/config'

const api = axios.create({baseURL: config.API_ROOT_URL})

// Order fetch cart by status

const getAllOrdersFilteredByOrdered = async () => {
  try {
    return await api.get(`/api/cart/get-by-status?status=orderedAt`)
  } catch (e) {
    console.error(e)
  }
}

export default  getAllOrdersFilteredByOrdered();
