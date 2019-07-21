const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    
    message.channel.send("Getting logo...").then(message => message.delete(1700));
    message.channel.send("AquaWD Server logo.", {files: ["./images/aquawd.png"]});
    
}
module.exports.help = {
name: "serverlogo"
}