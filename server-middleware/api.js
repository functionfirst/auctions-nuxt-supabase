const bodyParser = require('body-parser')
const app = require('express')()
const { session, signIn, signOut }  = require('./controllers/auth')
const { createUser, userDetails } =  require('./controllers/users')

app.use(bodyParser.json())

app.get('/auth/session', session)
app.get('/auth/signout', signOut)
app.post('/auth/signin', signIn)
app.post('/auth/signup', createUser)

app.get('/user/details', userDetails)

module.exports = app
