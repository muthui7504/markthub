import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail' ,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls:{
      rejectUnauthorized: false 
    }
  });



export default transporter