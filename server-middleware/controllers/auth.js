const supabase = require('../supabase')

const session = async (req, res) => {
  const session = supabase.auth.session()
  return res.status(200).json({ session })
}

const signIn = async (req, res) => {
  const auth = {
    email: req.body.email,
    password: req.body.password
  }

  const {
    user,
    session,
    error
  } = await supabase.auth.signIn(auth)

  if (error) {
    return res.status(error.status).json(error.message)
  }

  return res.status(200).json({ user, session })
}


const signOut = async (req, res) => {
  await supabase.auth.signOut()
  return res.status(200)
}

export {
  session,
  signIn,
  signOut
}
