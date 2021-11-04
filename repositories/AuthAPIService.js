class AuthAPIService {
  constructor (supabase) {
    this.supabase = supabase
  }

  signout () {
    return this.supabase.auth.signOut()
  }

  signin (credentials) {
    return this.supabase.auth.signIn(credentials)
  }
}

export default AuthAPIService
