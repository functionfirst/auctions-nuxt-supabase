const bodyParser = require('body-parser')
const app = require('express')()
const { session, signin, signout, signup, userDetails }  = require('./controllers/auth')

app.use(bodyParser.json())

app.get('/auth/session', session)
app.post('/auth/signin', signin)
app.get('/auth/signout', signout)
app.post('/auth/signup', signup)

app.get('/user/details', userDetails)

module.exports = app
