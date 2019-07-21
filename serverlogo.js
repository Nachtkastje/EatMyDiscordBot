const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setImage(sicon)

   message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo"
}
