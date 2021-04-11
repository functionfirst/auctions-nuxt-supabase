const bodyParser = require('body-parser')
const app = require('express')()
const { session, signin, signout }  = require('./controllers/auth')
const { createUser, userDetails } =  require('./controllers/users')

app.use(bodyParser.json())

app.get('/auth/session', session)
app.get('/auth/signout', signout)
app.post('/auth/signin', signin)
app.post('/auth/signup', createUser)

app.get('/user/details', userDetails)

module.exports = app
