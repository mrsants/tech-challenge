const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mysql = require('mysql');

const config = {
    name: 'docker-node-mongo',
    port: 3000,
};

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect('mongodb://root:root@127.0.0.1:27017/database', { useNewUrlParser: true })
  .then(() => {
    console.log('Mongo Connected')

    const UsersSchema = new mongoose.Schema({
        fname: String,
        lname: String,
        email: String
    });

    const Users = mongoose.model('Users', UsersSchema, 'Users');
    Users.insertMany([
        {
            fname: 'niraj',
            lname: 'maharjan',
            fname: 'niraj@maharjan.com',
        },
        {
            fname: 'saru',
            lname: 'maharjan',
            fname: 'saru@maharjan.com',
        }
        ,{
            fname: 'kk',
            lname: 'maharjan',
            fname: 'kk@maharjan.com',
        }
    ], (err) => {
        console.log('error -->', err)
    })

  })
  .catch(err => console.log(err));


var con = mysql.createConnection({
host: "mysql",
user: "root",
password: "root"
}).connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
});
});



app.get('/', (req, res) => {
    res.status(200).send('///');
});

app.get('/health', (req, res) => {
    res.status(200).send('Ok!');
});

app.listen(config.port, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    console.info(`${config.name} running on http://localhost:${config.port}`);
});