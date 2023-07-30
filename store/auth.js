export const state = () => ({
    loggedIn: false,
    user: null,
  })
  
  export const mutations = {
    SET_LOGGED_IN(state, value) {
      state.loggedIn = value
    },
    SET_USER(state, user) {
      state.user = user
    },
  }
  
  export const actions = {
    login({ commit }, user) {
      // Aqui você pode realizar qualquer lógica necessária para realizar o login do usuário.
      // Por exemplo, fazer uma chamada à API para autenticar o usuário e obter os detalhes do usuário.
  
      // Neste exemplo, estamos apenas simulando um login bem-sucedido.
      const loggedIn = true
      commit('SET_LOGGED_IN', loggedIn)
      commit('SET_USER', user)
    },
    logout({ commit }) {
      // Aqui você pode realizar qualquer lógica necessária para fazer o logout do usuário.
      // Por exemplo, fazer uma chamada à API para encerrar a sessão do usuário.
  
      // Neste exemplo, estamos apenas simulando o logout.
      const loggedIn = false
      commit('SET_LOGGED_IN', loggedIn)
      commit('SET_USER', null)
    },
  }
  