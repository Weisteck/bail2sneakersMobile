import axios from 'axios'
import config from '../config/config'

const api = axios.create({ baseURL: config.API_ROOT_URL })

// Order fetch cart by status

const getAllOrdersFilteredByOrdered = async () => {
  try {
    const response = await api.get(`/api/cart/get-by-status?status=orderedAt`)
    return response
  } catch (e) {
    console.log("ERROR")
    console.error(e)
  }
}

export const putCartStatus = async (status) => {
  try {
    console.log('status:', status)
    return await api.put(`/api/cart`, { status: status })
  } catch (e) {
    console.error(e)
  }
}

export default getAllOrdersFilteredByOrdered()
