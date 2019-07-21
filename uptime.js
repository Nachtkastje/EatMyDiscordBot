const Discord = require("discord.js");
var moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");

module.exports.run = async (bot, message, args) => {

    let uptime = moment.duration(bot.uptime).format("D [Dagen], H [Uren], m [Minuten], s [Seconden]");
    var embed = new Discord.RichEmbed()
    .setFooter(`${bot.user.username}`, `${message.author.displayAvatarURL}`)
    .setColor("GREEN")
    .setDescription(`${uptime}`)
    message.channel.send(embed)
}
module.exports.help = {
  name: "uptime"
} 
