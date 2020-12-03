const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';



client.once('ready', () => {
    console.log('mayobot is online');
    client.user.setActivity('Sta lavorando...')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'ciao.'){
        message.channel.send('Ciao!');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UCxxZCgdTVnqYFoCDcdLHBow/videos')
    }else if(command === 'whoami'){
const embed = new Discord.MessageEmbed()
.setTitle(message.author.username)
.setThumbnail(message.author.avatarURL())
.setDescription('entrato nel')
.addFields({
    name: 'sei entrato nel',
    value: Discord.GuildMember.joinedAt()
}, {
    name: message.author.avatar,
    value: 'test'
    })
        message.channel.send(embed)    
}});

















































































































client.login('get your own token...');
