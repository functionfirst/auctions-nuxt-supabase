class ProfileAPIService {
  constructor (supabase) {
    this.collection = supabase.from('profiles')
  }

  getProfile (session) {
    return this.collection.select('name').eq('id', session.user.id).single()
  }

  updateProfile (profile, config = {}) {
    return this.collection.upsert(profile, config)
  }

  updateProfileMinimal (profile) {
    return this.updateProfile(profile, {
      returning: 'minimal' // Don't return the value after inserting
    })
  }
}

export default ProfileAPIService
