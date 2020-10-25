import { ADD_COUNTER, ADD_TO_CART} from './mutation-type'

export default {
  addCart({
    state,
    commit
  }, context) {
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(item => item.iid === context.iid)
      if(oldProduct) {
        commit(ADD_COUNTER, oldProduct)
        resolve('商品数量+1')
      } else {
        context.count = 1
        context.checked = true
        commit(ADD_TO_CART, context)
        resolve('添加购物车成功')
      }
    })
  },
  // removeCartItem({state, commit}, context) {

  // }
}
