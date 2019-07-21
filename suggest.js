const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    const argss = args.join(' ');
    if(!args) return message.channel.send('Geef een suggestie op')
     
    let bicon = bot.user.displayAvatarURL;
    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(` :) - ${argss}`)
    .setTitle(`Suggestie van ${message.author.tag}`)
    .setThumbnail(bicon)

    let msg = await bot.channels.get(`KANAAL ID HIER`).send(embed);
    await msg.react(`✅`)
    await msg.react(`🚫`)
    message.delete({timeout: 1000});
}
module.exports.help = {
  name: "suggest"
} 
