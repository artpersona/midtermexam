const path = require('path')
const express = require('express')
const app = express()

app.get('/perez/10', function(req,res1){
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
pool.query('SELECT  department_id "Department", AVG(salary)"Average Salary", COUNT(*) "No. of Employees" from "perez_MidtermExam".employees GROUP BY department_id HAVING department_id = 90;', (err, res) => {
    let tbody = ``;
    for(let i=0; i<res.rows.length;i++){
        const x = res.rows[i]['Department']
        const y = res.rows[i]['Average Salary']
        const z = res.rows[i]['No. of Employees']
        tbody +=  ` <tr>
        <td>${x}</td>
        <td>${y}</td>
        <td>${z}</td>
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
                <th>Average Salary</th>
                <th>No. of Employees</th>
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