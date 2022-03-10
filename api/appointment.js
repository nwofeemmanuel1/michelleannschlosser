const express=require("express")
const Router=express.Router()
const validateAppointment=require("../validations/validateAppointment")
const nodemailer=require("nodemailer")

Router.post("/",(req,res)=>{
    // console.log(req.body)
const isvalid=validateAppointment(req.body)
if(isvalid !==true)return res.status(400).json({error:true,errMessage:isvalid});


let transporter=nodemailer.createTransport({

service:"Yahoo",
  secure: false,

auth: {
    user: 'michelleannschlloser@yahoo.com',
    pass:"otomzvcfvvypdkde"
    // secure:false,
    } 
    
})

  let mailOptions={
    from:"michelleannschlloser@yahoo.com",
    // from:"michelleannschlloser@outlook.com",
    to:"enwofe2020@gmail.com",
  subject:`Request for an appointment from: ${req.body.email}`,
//   text:"just wanna know if this works",
 html: `<h3 style="color: #fff; background-color: #5b5ef7; padding: 5px; text-align: center;">Request of appointment from: ${req.body.email}</h3>
      <p>First Name: ${req.body.firstName}</p>
      <p>Last Name: ${req.body.lastName}</p>
      <a href="mailto:${req.body.email}">Email: ${req.body.email}</a>
      <p>Phone Number: ${req.body.phoneNumber}</p>
      <p>Country: ${req.body.country}</p>
      <p>Message:" ${req.body.message}"</p>
 `,
}

transporter.sendMail(mailOptions,(err,info)=>{
    if(err)return res.status(400).json({error:true, errMessage:`AN ERROR OCCURED :${err.message}`})
    // console.log(info)
    return res.status(200).json({error:false, message:"message sent"})
    // console.log("message sent",info)
})



})
module.exports=Router

