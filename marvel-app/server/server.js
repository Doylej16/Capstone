const express = require('express')
const collection = require ("../mongo")
const bcrypt = require('bcrypt');
const { user } = require('../models')
const cors = require ("cors")
const app = express()
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../path/to/.env') });


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.static("public"));



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
            res.json({name: name})
        }
    });
});


app.get("/login", cors(), (req,res)=>{

})

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await user.findOne({ where: { email } });

    if (User) {
      const passwordMatch = await bcrypt.compare(password, User.password);

      if (passwordMatch) {
        console.log("User logged in:", User);
        res.redirect("/");
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});



app.get("/", cors(), (req,res)=>{
  res.sendFile(path.join(__dirname, "..", "src", "Components", "home.jsx"));
})



app.listen(3100,()=>{
    console.log("server is runnig")
})