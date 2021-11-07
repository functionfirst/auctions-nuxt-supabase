class AuthAPIService {
  constructor (supabase) {
    this.supabase = supabase
  }

  resetPasswordForEmail (email) {
    return this.supabase.auth.api.resetPasswordForEmail(email)
  }

  signout () {
    return this.supabase.auth.signOut()
  }

  signup (credentials) {
    return this.supabase.auth.signUp(credentials)
  }

  signin (credentials) {
    return this.supabase.auth.signIn(credentials)
  }

  updateUser (accessToken, user) {
    return this.supabase.auth.api.updateUser(accessToken, user)
  }
}

export default AuthAPIService
