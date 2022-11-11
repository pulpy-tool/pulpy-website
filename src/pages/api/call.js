

export default function (req, res) {
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 587,     
      host: "email-smtp.us-east-1.amazonaws.com",
         auth: {
              user: "AKIA5VLKN6QPWUOGK26G",
              pass: "BCVYUQnKIwOMBhHC5H5SOv5IGfbPwElgceeCHNljJFvk",
           },
      secure: false,
      tls:{
        ciphers:'SSLv3'
      }
    });
    
    const mailData = {
        from: '"Contact" <help@pulpy.io>',
        to: `${req.body.email}`,
        subject: 'Welcome to Pulpy',
        //text: req.body.message + " | Sent from: " + req.body.email,
        html: `<!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Welcome to pulpy</title>           
          </head>
          <body class="">
              <p>Hi ${req.body.fullname}</p>
              <p>Thank you for your request! Sam will reach out to you shortly to discuss the needs of your business.</p>
              <p>We look forward to building your business to the next level.</p>              
              <p>Best,<br />Sam</p>

          </body>
        </html>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    
    res.send('success')
  }