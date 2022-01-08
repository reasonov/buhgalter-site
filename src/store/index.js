import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      windowWidth: 0,
      popupIsOpen: false
    }
  },
  mutations: {
    resizeWindow (state, payLoad) {
      state.windowWidth = payLoad
    },
    togglePopup (state, payLoad) {
      state.popupIsOpen = payLoad
    }
  }
})

export default store
