exports.run = (Discord, client, message, args) => {
	let allowedRole = message.guild.roles.find("name", "[-] Discord Admin");
	if(!message.member.roles.has(allowedRole.id)) return message.channel.send("You have invalid permissions!")
		   let channel1 = message.mentions.channels.first()
		   let title = args[1];
		   if (title == "ally"){
			
			var color = "#cccccc";
			   var text = args.slice(2).join(" ");
		   } else if (title == "hr"){
			
			var color = "#ffffff";
			   var text = args.slice(2).join(" ");
		   } else if (title == "com"){
			
			var color = "#353535";
			   var text = args.slice(2).join(" ");
		   } else if (title == "staff"){
			
			var color = "#5b5b5b";
			   var text = args.slice(2).join(" ");
		   } else{
			var color = "#7f7f7f";
			var text = args.slice(1).join(" ");
		   }
		   const author = message.author;
		   //const colour = args.slice(2).join("");
		   var icon = "https://cdn.discordapp.com/attachments/449272905990275072/451378048801964032/TastiezAnnouncement.png";
		   const embed = new Discord.RichEmbed()
		   .setColor(color)
		   .setThumbnail(icon)
		   .setTitle(":mega: Announcement: ")
		   .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
		   .setFooter("An announcment made at ")
		   .setTimestamp()
		   message.delete(10)
		   channel1.send({embed})
	   
}
