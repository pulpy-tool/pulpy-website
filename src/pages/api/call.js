const ContactUs = require('../../models/contactus');
let nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  port: 587,
  host: "email-smtp.us-east-1.amazonaws.com",
  auth: {
    user: "AKIA5VLKN6QPWUOGK26G",
    pass: "BCVYUQnKIwOMBhHC5H5SOv5IGfbPwElgceeCHNljJFvk",
  },
  secure: false,
  tls: {
    ciphers: 'SSLv3'
  }
});
export default async function (req, res) {
  try {
    let request = req?.body;
    if (!request?.fullname) {
      throw "Name is requried"
    }
    if (!request?.email) {
      throw "Name is requried"
    }
    let response = await ContactUs.create(request);
    if (!response?.id) {
      throw "Something went Wrong";
    }
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
                <p>Hi ${request?.fullname ?? ''}</p>
                <p>Thank you for your request! Sam will reach out to you shortly to discuss the needs of your business.</p>
                <p>We look forward to building your business to the next level.</p>              
                <p>Best,<br />Sam</p>
                <b>Pulpy</b>
            </body>
          </html>`
    }

    await transporter.sendMail(mailData);
    return res.status(200).json({ message: "thanks, Our Team will contact you Soon!!" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }

}