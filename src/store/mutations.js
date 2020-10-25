import { ADD_COUNTER, ADD_TO_CART, REMOVE_CART_ITEM} from './mutation-type'
export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },

  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  },
  [REMOVE_CART_ITEM](state, payload) {
    state.cartList.splice(payload, 1)
  }
}