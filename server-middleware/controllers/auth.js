const supabase = require('../supabase')

const resetpassword = async (req, res) => {
  const { error } = await supabase.auth.api.resetPasswordForEmail(req.body.email)

  if (error) {
    return res.status(error.status).json(error)
  }

  return res.status(200).json({ success: true })
}

const session = async (req, res) => {
  const session = supabase.auth.session()
  return res.status(200).json(session)
}

const signin = async (req, res) => {
  // const payload = {
  //   email: req.body.email,
  //   password: req.body.password
  // }

  const {
    session,
    error
  } = await supabase.auth.signIn(req.body)

  if (error) {
    return res.status(error.status).json(error)
  }

  return res.status(200).json(session)
}

const signout = async (req, res) => {
  await supabase.auth.signOut()
  return res.status(200).json({ success: true })
}

const signup = async (req, res) => {
  // const payload = {
  //   email: req.body.email,
  //   password: req.body.password
  // }

  const { error } = await supabase.auth.signUp(req.body)

  if (error) {
    return res.status(error.status).json(error)
  }

  return res.status(200).json({ success: true })
}

const updateUser = async (req, res) => {
  // @todo should we white-list the req body payload to prevent other fields being sent?
  // const payload = req.body

  console.log(req.body.token)
  console.log(req.body.payload)

  const { error } = await supabase.auth.api.updateUser(req.body.token, req.body.payload)

  if (error) {
    return res.status(error.status).json(error)
  }

  return res.status(200).json({ success: true })
}

const userDetails = (req, res) => {
  const user = supabase.auth.user()
  res.json({ user })
}

export {
  resetpassword,
  session,
  signin,
  signout,
  signup,
  updateUser,
  userDetails
}
