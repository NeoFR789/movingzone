const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Assister la OpTium', type: 0} });
    console.log("En marche !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === "test"){
        message.reply("test");
        console.log('test');
        
    }

    if (message.content === prefix + `staff-commande`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__Staff Aide__" , "**Voici les commandes utile pour les __MovingZone__ !** \n /start \n /start-20h00 \n /start-20h15 \n /start-20h30 \n /start-20h45 \n /start-21h00 \n /start-21h15 \n /start-21h30 \n /start-21h45 \n /start-22h00 \n /start-22h15 \n /start-22h30 \n /start-22h45 \n /start-23h00 \n /start-23h15 \n /start-23h30 \n /start-23h45 \n /start-24h00")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Soyez prêt à rejoindre le vocal !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande start demandée !");
    }

    if (message.content === prefix + `start-20h00`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 20h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-20h15`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))       
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 20h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-20h30`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 20h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-20h45`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 20h45 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-21h00`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 21h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-21h15`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 21h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-21h30`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 21h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-21h45`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 21h45 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-22h00`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 22h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-22hh15`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 22h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-22h30`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 22h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-22h45`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 22h45 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-23h00`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 23h00 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-23h15`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer ! Rendez-vous à 23h15 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-23h30`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 23h30 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-23h45`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à 23h45 !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `start-24h00`){
    if (message.member.hasPermission("MANAGE_MESSAGES"))
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__MovingZone__" , "La **MovingZone** va bientôt commencer !  Rendez-vous à minuit !")
            .setFooter("Copyright 2018 © OpTium eSport")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

});
