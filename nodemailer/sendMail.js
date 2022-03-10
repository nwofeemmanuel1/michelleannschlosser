const nodemailer=require("nodemailer")

let transporter=nodemailer.createTransport({

service:"Yahoo",
// pool: true,
  secure: false,
//   host: 'smtp-mail.outlook.com',

auth: {
    user: 'michelleannschlloser@yahoo.com',
    pass:"otomzvcfvvypdkde"
    // secure:false,
    }
    
    
})

// let mailOptions={
//     from:"michelleannschlloser@yahoo.com",
//     // from:"michelleannschlloser@outlook.com",
//     to:"enwofe2020@gmail.com",
//   subject:"just using nodemailer",
//   text:"just wanna know if this works",
// //   html: " <h1>JUST WANNA KNOW IF IT WORKS</h1>",
// // attachments:[
// //     {filename:"image.png",path:"./image.png"}
// // ]
// }


// transporter.sendMail(mailOptions,(err,info)=>{
//     if(err)return console.log("an ERROR OCCURED  :", err)
//     console.log("message sent",info)
// })


const handleMail=(firstName,lastName,email,phoneNumber,country,message)=>{

    let mailOptions={
    from:"michelleannschlloser@yahoo.com",
    // from:"michelleannschlloser@outlook.com",
    to:"enwofe2020@gmail.com",
  subject:`Request for an appointment from: ${email}`,
//   text:"just wanna know if this works",
 html: `<h3 style="color: #fff; background-color: #5b5ef7; padding: 5px; text-align: center;">Request of appointment from: ${email}</h3>
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <a href="mailto:${email}">Email: ${email}</a>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Country: ${country}</p>
      <p>Message:" ${message}"</p>
 `,
// attachments:[
//     {filename:"image.png",path:"./image.png"}
// ]
}

transporter.sendMail(mailOptions,(err,info)=>{
    if(err)return {error:true, errMessage:`AN ERROR OCCURED :  ${err.message}`}
    return {error:false, message:"message sent"}
    // console.log("message sent",info)
})


}
// module.exports=handleMail

// handleMail("chidera","nwofe","enwofe2020@gmail.com","0908373673673","nigeria", "my first test app")



