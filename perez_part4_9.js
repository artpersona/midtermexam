const path = require('path')
const express = require('express')
const app = express()

app.get('/perez/9', function(req,res1){
    require('dotenv').config()
    const { Pool } = require('pg')
    const pool = new Pool({
    user: `${process.env.DB_USER}`, 
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`, 
    password: `${process.env.DB_PASSWORD}`, 
    port: process.env.DB_PORT, 
    ssl:{
        rejectUnauthorized: false
    },  
})
pool.query('SELECT COUNT(DISTINCT job_id)"Number of Jobs" from "perez_MidtermExam".employees;', (err, res) => {
    const x = res.rows[0]['Number of Jobs']
    console.log(res.rows)
    res1.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test</title>
    </head>
    <body>
        <table class="tb">
            <tr><th>Number of jobs available</th></tr>
            <tr>
            <td>${x}</td>
            </tr>
        </table>
    </body>
    </html>`)
    pool.end()
  })
})



app.listen(3000)