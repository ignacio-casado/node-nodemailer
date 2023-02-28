import twilio from 'twilio';

const accountSid = ''
const authToken = ''

const client = twilio(accountSid, authToken)

try{
    const message = await client.messages.create({
        body: 'Hola soy un SMS desde node',
        from: '',
        to: ''
    })
    console.log(message)
}catch(err){
    console.log(err)
}