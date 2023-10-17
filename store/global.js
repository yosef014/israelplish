

export const state = () => ({
 menu: null
})

export const mutations = {
  setMenu (state, menu) {
    state.menu = menu
  },
}

export const getters = {
  // cartQuantity: (state)=> {
  //   return  state.cart?.reduce((a, b) => a + Number(b.quantity), 0)
  // }
}

export const actions = {

  async getMenu({ commit }) {
    try {
      const res = await this.$api.getMenu()
      const menu = res?.data?.attributes
      commit('setMenu', menu)
     return menu
    } catch (e){
      console.log('getCart error', e)
      throw e
    }
  },

}

// export default  {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
//   getters
// }
