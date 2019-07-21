const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    if (message.author.id !== (`516532156789555210`)) return message.channel.send(`Geen toegang.`);
    const status = args.join(' ');
    if (!status) return message.channel.send(`Geef een status op.`);
    bot.user.setActivity(`${status}`, { type: "PLAYING"});
    message.channel.send(`De status is aangepast naar **${status}**`);

}
module.exports.help = {
  name: "play"
} 
