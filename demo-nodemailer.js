import { createTransport } from "nodemailer";

const TEST_MAIL = "marcia.hoppe@ethereal.email"

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: 'WC9kSmFgCqbC2aenj8'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1>Hola mundo</h1>'
}

try{
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
}catch(err){
    console.log(err)
}
