import getAllOrdersFilteredByOrdered from '../../../api/bail2sneakersDbApi';

const initialState = {
  carts: getAllOrdersFilteredByOrdered
}

const cartsReducer = (state = initialState, action ) => {
  const data = state.carts._W.data
  return data;
}

export default cartsReducer;