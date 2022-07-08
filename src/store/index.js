import Vue from 'vue'
import Vuex from 'vuex'
import juegos from './juegos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos,
    colores: [
      { value: 'red', color: 'Rojo' },
      { value: 'blue', color: 'Azul' },
      { value: 'green', color: 'Verde' },
      { value: 'black', color: 'Negro' },
    ]
  },
  getters: {
    totalJuegos:state=>{
      return state.juegos.reduce((total, juego)=>{
          return total + Number((juego.stock))
      },0)
    }
  },
  mutations: {
    CAMBIAR_COLOR:(state, {codigo,nuevoColor})=>{
      let index = state.juegos.findIndex((juego)=> juego.codigo === codigo)
      state.juegos[index].color = nuevoColor
    },
    ADD_STOCK:(state, codigo) => {
      let index = state.juegos.findIndex((juego)=> juego.codigo === codigo)
      state.juegos[index].stock++
    },
    REMOVE_STOCK:(state,codigo)=>{
      let index = state.juegos.findIndex((juego)=> juego.codigo === codigo)
      if(state.juegos[index].stock > 0){
        state.juegos[index].stock--
      }
    }
  },
  actions: {
    cambiarColor:({commit}, juego)=>{
      commit('CAMBIAR_COLOR', juego)
    },
    addStock:({commit},codigo)=>{
      commit('ADD_STOCK',codigo)
    },
    removeStock:({commit},codigo)=>{
      commit('REMOVE_STOCK',codigo)
    }

  },
  modules: {
  }
})
