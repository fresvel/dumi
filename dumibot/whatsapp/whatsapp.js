const {Client, LocalAuth} = require('whatsapp-web.js');
console.log('Inicianco Dumibot')
const client = new Client({
    authStrategy: new LocalAuth({dataPath:`${__dirname}/wtp_sesiones`, clientId:'Dumibot'})
});

console.log(client)


const qrcode=require('qrcode-terminal');


client.on('qr', (qr) => {
    console.log('Recibiendo Código', qr);
    console.log('Generando QR')
    qrcode.generate(qr, {small: true});
    console.log('QR oK')
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

