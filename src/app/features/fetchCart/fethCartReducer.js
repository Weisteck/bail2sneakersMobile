import getAllOrders from '../../../api/bail2sneakersDbApi';

const initialState = {
  carts: getAllOrders
}

const cartsReducer = (state = initialState, action ) => {
  return state;
}

export default cartsReducer;