const supabase = require('../supabase')

const createUser = async (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password
  }

  const {
    user,
    session,
    error
  } = await supabase.auth.signUp(newUser)

  if (error) {
    return res.status(error.status).json(error.message)
  }

  return res.status(200).json({ user, session })
}

const userDetails = (req, res) => {
  const user = supabase.auth.user()
  res.json({ user })
}

export {
  createUser,
  userDetails
}
