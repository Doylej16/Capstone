const express = require('express')
const collection = require ("../mongo")
const bcrypt = require('bcrypt');
const { user } = require('../models')
const cors = require ("cors")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.get("/signup", cors(), (req,res)=>{

})

app.post('/signup', async (req, res) =>  {
    const { name, email, password } = req.body;

    bcrypt.hash(req.body.password, 10, async function (err, hash) {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            const data = {
                name: name,
                email: email,
                password: hash,
            };

            const newUser = await user.build(data);
            await newUser.save();

            res.status(200).redirect('/login');
        }
    });
});


app.get("/login", cors(), (req,res)=>{

})

app.post('/login', async (req,res) => {
    
    const { email,password}  = req.body; 

    

})

app.get("/Hometest", cors(), (req,res)=>{

})



app.listen(3100,()=>{
    console.log("server is runnig")
})