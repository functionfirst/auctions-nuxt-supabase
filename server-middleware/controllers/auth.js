const supabase = require('../supabase')

const session = async (req, res) => {
  const session = supabase.auth.session()
  return res.status(200).json({ success: true, session })
}

const signin = async (req, res) => {
  const auth = {
    email: req.body.email,
    password: req.body.password
  }

  const {
    session,
    error
  } = await supabase.auth.signIn(auth)

  if (error) {
    return res.status(error.status).json(error.message)
  }

  return res.status(200).json({ success: true, session })
}

const signout = async (req, res) => {
  await supabase.auth.signOut()
  return res.status(200).json({ success: true })
}

export {
  session,
  signin,
  signout
}
