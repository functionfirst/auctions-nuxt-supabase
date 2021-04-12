const bodyParser = require('body-parser')
const app = require('express')()
const { resetpassword, session, signin, signout, signup, userDetails, updateUser }  = require('./controllers/auth')

app.use(bodyParser.json())

app.get('/auth/session', session)
app.post('/auth/signin', signin)
app.get('/auth/signout', signout)
app.post('/auth/signup', signup)
app.post('/auth/resetpassword', resetpassword)
app.post('/user', updateUser)

app.get('/user', userDetails)

module.exports = app
