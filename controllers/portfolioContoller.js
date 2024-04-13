const nodemailer=require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

const transporter=nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key:process.env.API_SENDGRTD,
        },
    })
    
);


const sendEmailController=(req,res)=>{
 try{
    const{name,email,msg}=req.body
    //validation
    if(!name||!email||!msg){
        return res.status(404).send({
            success:false,
            message:'plase provide all field',
        })
        transporter.sendMail({
            to:"madhumech1405@gmail.com",
            from:'madhusudhananmech1405@gmail.com',
            subject:'rearding mern port App',
            html:`
            <h5>Deatail informaion</h5>
            <ul>
            <li><p>Name:${name}</p></li>
            <li><p>Name:${email}</p></li>
            <li><p>Name:${msg}</p></li>
            </ul>
            `,
        })
    }


    return res.status(200).send({
        success:true,
        message:"your messaga send succesfully",
    })

 }catch(error){
    console.log(error)
    return res.status(404).send({
        success:false,
        message:'send email api error',
        error
    })
 }




}


module.exports={sendEmailController}