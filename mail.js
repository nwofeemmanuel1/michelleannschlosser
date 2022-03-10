const nodemailer=require("nodemailer")

let transporter=nodemailer.createTransport({
//     service:"gmail",
//      host: 'smtp.gmail.com',
//    pool: true,
//   secure: false,
//     auth:{
// user:"zogibestfilms@gmail.com",
// password:"desolidboy1"
//     }
service:"hotmail",
// pool: true,
//   secure: false,
//   host: 'smtp-mail.outlook.com',

auth: {
    user: 'michelleannschlloser@outlook.com',
    pass: 'Privatekey1@1',
    // secure:false,
    }
    
    
})

let mailOptions={
    from:"zogibestfilms@gmail.com",
    // from:"michelleannschlloser@outlook.com",
    to:"enwofe2020@gmail.com",
  subject:"just using nodemailer",
  text:"just wanna know if this works",
//   html: " <h1>JUST WANNA KNOW IF IT WORKS</h1>",
// attachments:[
//     {filename:"image.png",path:"./image.png"}
// ]
}


transporter.sendMail(mailOptions,(err,info)=>{
    if(err)return console.log("an ERROR OCCURED  :", err)
    console.log("message sent",info)
})



