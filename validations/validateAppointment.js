const Joi=require("joi")

const validateAppointment=(req)=>{

const schema=Joi.object({
firstName:Joi.string().required(),
lastName:Joi.string().required(),
email:Joi.string().email().required(),
phoneNumber:Joi.number().required(),
country:Joi.string().required(),
message:Joi.string().required()
})
const result=schema.validate({firstName:req.firstName,lastName:req.lastName,email:req.email,phoneNumber:req.phoneNumber,country:req.country,message:req.message})
if(result.error) return result.error.message;
return true
}


module.exports=validateAppointment