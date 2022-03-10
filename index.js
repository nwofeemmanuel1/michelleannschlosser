const express=require("express")
const app=express()
const appointment=require("./api/appointment")
app.use(express.json())
app.use("/api/submit/appointment",appointment)

app.use("/",express.static("html"))
const port=process.env.PORT || 3000 
app.listen(port,()=>console.log(`running on port: ${port}`))