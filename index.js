const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';



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
.setDescription('you are in: ' +Discord.Guild.name())
        message.channel.send(embed)    
}});

















































































































client.login('better luck next time');
