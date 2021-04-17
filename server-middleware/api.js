import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import supabase from '../utils/supabase'

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())

const setAuthCookie = (req, res) => {
  try {
    supabase.auth.api.setAuthCookie(req, res)
  } catch (error) {
    if (error.message === 'Auth event missing!') {
      return res.status(error.status).send(error.message)
    }

    return res.status(500).send('Failed to get user')
  }
}

const getUserByCookie = async (req, res) => {
  try {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    return res.status(200).json({ user })
  } catch (error) {
    return res.status(500).send('Failed to get user')
  }
}

app.post('/auth', setAuthCookie)
app.get('/auth', getUserByCookie)

export default app
