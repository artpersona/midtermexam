const path = require('path')
const express = require('express')
const app = express()

app.get('/perez/6', function(req,res1){
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
pool.query('SELECT department_id "Department",MAX(salary) "Maximum Salary" FROM "perez_MidtermExam".employees GROUP BY department_id;', (err, res) => {
    let tbody = ``;
    for(let i=0; i<res.rows.length;i++){
        const x = res.rows[i]['Department']
        const y = res.rows[i]['Maximum Salary']
        tbody +=  ` <tr>
        <td>${x}</td>
        <td>${y}</td>
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
            <tr><th>Department</th>
                <th> Maximum Salary</th>
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