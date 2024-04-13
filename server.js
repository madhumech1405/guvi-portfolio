const express=require('express')
const cors=require('cors')
const dotenv=require("dotenv")
const path=require('path')

const app=express()
//middleware
dotenv.config()


//routes
app.use(cors())
app.use(express.json())
//static files access 
app.use(express.static(path.join(__dirname,'./client/dist')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/dist/index.html"))
})
//routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoute'))
//port
const PORT=process.env.PORT||3001
//lister
app.listen(PORT,()=>{
    console.log(`server runing in node PORT ${PORT}`)
})