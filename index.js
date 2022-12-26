require('dotenv').config()

const express = require('express')
const app = express()

app.set('environment', process.env.NODE_ENV || 'development')
app.set('port', process.env.PORT || '5000')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('hello world :3'))

app.listen(app.get('port'), () => {
  const port = app.get('port')
  console.log('Express server listening on port', port)
})
