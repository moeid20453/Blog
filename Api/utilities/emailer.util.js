const nodemailer = require("nodemailer");


exports.sendMail = async (receiver, subject, text, html) => {
  let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "a9f00e76121237",
      pass: "1586bde86aca43"
    }
  });


  let info = await transporter.sendMail({
    from: '"Node Mailer" <node@mailer.com>', 
    to: receiver, 
    subject, 
    text, 
    html, 
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}