export default function ({ store, redirect }) {
    // Verifica se o usuário está autenticado
    if (!store.state.auth.loggedIn) {
      return redirect('/login') // Redireciona para a página de login se não estiver autenticado
    }
  }
  