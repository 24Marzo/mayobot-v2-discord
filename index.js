const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const randommayo = 'random mayo'

let moments = ['https://cdn.discordapp.com/attachments/717392723388137482/784182239432146964/Screenshot_2020-12-03-22-48-45-703_com.mxtech.videoplayer.ad.jpg', 'https://cdn.discordapp.com/attachments/717392723388137482/784182239734005810/Screenshot_2020-12-03-22-27-54-193_com.mxtech.videoplayer.ad.jpg',  'https://cdn.discordapp.com/attachments/717392723388137482/784182241017331732/Screenshot_2020-12-02-23-43-46-964_com.mxtech.videoplayer.ad.jpg', 'https://cdn.discordapp.com/attachments/717392723388137482/784182241273839626/Screenshot_2020-12-02-23-42-36-112_com.mxtech.videoplayer.ad.jpg', 'https://cdn.discordapp.com/attachments/717392723388137482/784182241864712222/Screenshot_2020-12-02-23-29-21-599_com.mxtech.videoplayer.ad.jpg', 'https://cdn.discordapp.com/attachments/717392723388137482/784182242346926080/Screenshot_2020-12-02-23-15-27-364_com.opera.browser.jpg', 'https://cdn.discordapp.com/attachments/717392723388137482/784182242678800422/Screenshot_2020-12-02-23-13-47-192_com.opera.browser.jpg']

client.once('ready', () => {
    console.log('mayobot is online');
    client.user.setActivity('working | -help')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'hello'){
        message.channel.send('hello');
    }else if(command === 'whoami'){
const embed = new Discord.MessageEmbed()
.setTitle(message.author.username)
.setThumbnail(message.author.avatarURL())
        message.channel.send(embed);  
    }else if(command === 'randommayo'){
const mayo1 = new Discord.MessageEmbed()
    .setTitle('Here is your random mayonese!')
    .setImage('https://i.imgur.com/tZU1fFj.jpeg')
    .setColor('#FF0000')
const mayo2 = new Discord.MessageEmbed()
    .setTitle('Here is your random mayonese!')
    .setImage('https://i.imgur.com/P9hfHJp.jpg')
    .setColor('#FF0000')
const mayo3 = new Discord.MessageEmbed()
    .setTitle('Here is your random mayonese!')
    .setImage('https://i.imgur.com/JPpUZPv.jpeg')
    .setColor('#FF0000')
const mayo4 = new Discord.MessageEmbed()
    .setTitle('Here is your random mayonese!')
    .setImage('https://i.imgur.com/T3n591t.jpg')
    .setColor('#FF0000')
const mayo5 = new Discord.MessageEmbed()
    .setTitle('Here is your random mayonese!')
    .setImage('https://i.imgur.com/udCDKtX.jpeg')
    .setColor('#FF0000')
const mayo6 = new Discord.MessageEmbed()
    .setTitle('Here is your random mayonese!')
    .setImage('https://i.imgur.com/gOlFPKA.jpeg')
    .setColor('#FF0000')
        const numbers = [mayo1,mayo2,mayo3,mayo4,mayo5,mayo6];
let randNum = numbers[Math.floor(Math.random() * numbers.length)];
message.channel.send(randNum)
    }else if(command === 'help'){
    const help = new Discord.MessageEmbed()
    .setAuthor('Help:')
    .setTitle('These are the bot commands.')
    .addField('`-hello`', 'just says hello back')
    .addField('`-whoami`', 'says who you are')
    .addField('`-randommayo`', 'gives you random mayo')
    .addField('`-cum`', 'this is a very good command.. just try it')
    .setColor('#0000FF')
    .setThumbnail('https://cdn.discordapp.com/avatars/783820096236945428/f83f61db71934560d73d4b27f430c983.png?size=128')
message.channel.send(help)
    }else if(command === 'cum'){
        message.channel.send(moments[Math.floor(Math.random() * moments.length)])}
});


































var http = require('http');  

http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);














































































client.login('you know we straight we doin ur mom');
