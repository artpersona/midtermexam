const path = require('path')
const express = require('express')
const app = express()

app.get('/perez/dept', function(req,res1){
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
pool.query('SELECT * from "perez_HR".departments LIMIT 10', (err, res) => {
    let tbody = ``;
    for(let i=0; i<res.rows.length;i++){
        const a1 = res.rows[i]['department_id']
        const a2 = res.rows[i]['department_name']
        const a3 = res.rows[i]['manager_id']
        const a4 = res.rows[i]['location_id']
        
        tbody += ` <tr>
        <td>${a1}</td>
        <td>${a2}</td>
        <td>${a3}</td>
        <td>${a4}</td>
        </tr>`
    }
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
            <tr><th>Department ID</th>
                <th>Department Name</th>
                <th>Manager ID</th>
                <th>Location ID</th>
                
              
                
            </tr>
            <tbody>
            ${tbody}
            </tbody>
        </table>
    </body>
    </html>`)
    pool.end()
  })
})



app.listen(3000)