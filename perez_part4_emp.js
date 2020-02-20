const path = require('path')
const express = require('express')
const app = express()

app.get('/perez/emp', function(req,res1){
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
pool.query('SELECT * from "perez_MidtermExam".employees LIMIT 10', (err, res) => {
    let tbody = ``;
    for(let i=0; i<res.rows.length;i++){
        const a1 = res.rows[i]['employee_id']
        const a2 = res.rows[i]['first_name']
        const a3 = res.rows[i]['last_name']
        const a4 = res.rows[i]['email']
        const a5 = res.rows[i]['phone_number']
        const a6 = res.rows[i]['hire_date']
        const a7 = res.rows[i]['job_id']
        const a8 = res.rows[i]['salary']
        const a9 = res.rows[i]['commision_pct']
        const a10 = res.rows[i]['manager_id']
        const a11 = res.rows[i]['department_id']
        tbody +=  ` <tr>
        <td>${a1}</td>
        <td>${a2}</td>
        <td>${a3}</td>
        <td>${a4}</td>
        <td>${a5}</td>
        <td>${a6}</td>
        <td>${a7}</td>
        <td>${a8}</td>
        <td>${a9}</td>
        <td>${a10}</td>
        <td>${a11}</td>
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
            <tr><th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Hire date</th>
                <th>Job id</th>
                <th>Salary</th>
                <th>Comission PCT</th>
                <th>Manager ID</th>
                <th>Department Id</th>
              
                
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