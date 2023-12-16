const express = require('express')
const app = express()
require('dotenv').config()
const port =process.env.port

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('running twitter')
})
app.get('/login',(req,res)=>{
  res.send('<h1>please login here</h1>')
})
app.get('/insta',(req,res)=>{
    res.send('<h1>this is insta page</h1>')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})