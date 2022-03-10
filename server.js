const express = require('express')
const app = express()
const mysql = require('mysql')
// const port = 3000
app.set('port', process.env.PORT || 3000);


const con = mysql.createConnection(require('./config/database.js'))

con.connect((err) => {
  if(err) throw err
  console.log('DB connected')
})

app.listen(app.get('port'), () => {
  console.log(`start! express server on port ${app.get('port')}`)
})

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>`)
})

app.get('/mainMenu', (req,res) => {
  con.query('SELECT * from T_NB_TOP_MAIN_MENU', (error, rows, fields) => {
    if (error) throw error;
    res.header("Access-Control-Allow-Orign", "http://localhost:8080")
    res.send(rows)
  });
})

app.get('/subMenu', (req,res) => {
  con.query('SELECT * from T_NB_TOP_SUB_MENU', (error, rows, fields) => {
    if (error) throw error;
    res.send(rows)
  });
})

app.post('/subMenu1', (req,res) => {
  con.query('SELECT * from T_NB_TOP_SUB_MENU', (error, rows, fields) => {
    if (error) throw error;
    res.send(rows)
  });
})