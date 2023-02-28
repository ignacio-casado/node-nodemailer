import { createTransport } from "nodemailer";

const TEST_MAIL = "nacho.casado01@gmail.com"

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: '???????' //check https://www.google.com/url?q=https://security.google.com/settings/security/apppasswords&sa=D&source=editors&ust=1677606208202364&usg=AOvVaw16-GAORupKO3CJEP3QK4bF
    }
});

const mailOptions = {
    from: TEST_MAIL,
    to: 'nacho.casado01@gmail.com',
    subject: 'Mail de prueba desde Node.js',
    html: '<h1>Hola mundo</h1>'
}

try{
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
}catch(err){
    console.log(err)
}
