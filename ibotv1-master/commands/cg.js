const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (Discord, client, message, args) => {
    let staffc = message.mentions.channels.first()
    if (!staffc) return message.channel.send("I can not find the gamenight channel!");
    let allowedRole = message.guild.roles.find("name", "[-] Gamenight");
	  if(!message.member.roles.has(allowedRole.id)) return message.channel.send("You have invalid permissions!")

    let icon = "https://images-ext-1.discordapp.net/external/Pl7WSap4cMg6HGJ2bgrPwGprZ7lXA2c385liGGePdZo/https/cdn.discordapp.com/icons/335929022401740801/8b22579299a2cce0876b390ea0d099f2.jpg?width=80&height=80";
    let mutetime = args[1];
    let time = ms(mutetime)
    let game = args[2];
    let host = message.author;
    let link = args [3];
    let hours = time * 2.7E-7
    if (!mutetime) return message.reply("You didn't specify a time! Please specify how many ms from now you would like the gamenight!");

    var emebedannounce = new Discord.RichEmbed()

    .setFooter("Teethyz Gamenight | Copyright 2018")
    .setTitle("Teethyz Gamenight Announcement")
    .setThumbnail(icon)
    .setDescription("Teethyz is having a gamenight! Check back here before it starts for a link!")
    .addField("Game:", game)
    .addField("Time (from now):", mutetime)
    .addField("Host:", host)
    .setColor("#a9d9db")
    .setTimestamp()

    staffc.send(emebedannounce);
    message.reply("Gamenight has been created for: " + mutetime + " from now! Announcement should be pushed out.");
    let announcetwo = mutetime-300000
    let uwot = time-300000
    setTimeout(function() {
        var emebedbefore = new Discord.RichEmbed()

.setFooter("Teethyz Gamenight | Copyright 2018")
.setTitle("Teethyz Gamenight Announcement")
.setThumbnail(icon)
.setDescription("The gamenight is due to be hosted in 5 minutes! Keep an eye out!")
.addField("Host:", host)
.addField("Game:", game)
.addField("Link:", link)
.setColor("#a9d9db")
.setTimestamp()

	staffc.send("@here")
        staffc.send(emebedbefore);
    }, uwot);

    setTimeout(function() {
        var emebedstart = new Discord.RichEmbed()

.setFooter("Teethyz Gamenight | Copyright 2018")
.setTitle("Teethyz Gamenight Announcement")
.setThumbnail(icon)
.setDescription("The gamenight is now starting!")
.addField("Join Here:", link)
.setColor("#a9d9db")
.setTimestamp()

staffc.send(emebedstart);

    }, time);

}
