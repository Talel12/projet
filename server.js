const express=require("express")
const app=express()
//initi middlware
app.use(express.json())

//connect data base
const mongoose=require('mongoose')
const db='mongodb+srv://gomycode:99256188@location-h7tdg.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(db,{ useUnifiedTopology: true, useNewUrlParser: true },(err)=>{if (err)throw err 
console.log('data base connected...')})



app.use('/api/user',require("./routes/users"))
app.use('/api/auth',require("./routes/auth"))
app.use('/api/annonce',require("./routes/annonce"))
app.use('/api/contact',require("./routes/contact"))





app.listen(5000,()=>console.log('server is listening on port 5000'))