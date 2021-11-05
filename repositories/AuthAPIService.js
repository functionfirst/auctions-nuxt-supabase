class AuthAPIService {
  constructor (supabase) {
    this.supabase = supabase
  }

  signout () {
    return this.supabase.auth.signOut()
  }

  resetPasswordForEmail (email) {
    return this.supabase.auth.api.resetPasswordForEmail(email)
  }

  signin (credentials) {
    return this.supabase.auth.signIn(credentials)
  }
}

export default AuthAPIService
