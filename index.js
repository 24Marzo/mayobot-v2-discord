const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const randommayo = 'random mayo'



client.once('ready', () => {
    console.log('mayobot is online');
    client.user.setActivity('working..')
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
    }});

















































































































client.login('nice try');
