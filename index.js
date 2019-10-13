const firebase = require('firebase');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'your token';
const PREFIX = "!";
let users;
var bot_version = "1.0.0";
const WEBSITE_URL = "https://thepinkteam.net";
const TEAMAPP = "https://pinkrobotics.teamapp.com";
const AUTHOR = "DevSamuelV";
// todo add events

users = ["Developer", "diamond dunkers YT", "Dr0verbuild", "XxOptic_JewsxX", "CreWizP", "brookzy0827", "WindySquid", "DarkWolf",
    "XxOpTiC_JeWxX", "XxOptic_JewsxX", "xXOpTic_MuslimXx", "Destroyer Gameing", "FieryPilot", "billythesquid_233",
];


bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    var AUTO_KICK = false;
    var member = message.member;
    var USER_KICK;
    var ADD_USER;

    while(AUTO_KICK) {
        if (!users == member.user.username.toString(USER_KICK)){
            USER_KICK.kick(`${USER_KICK} You Were Kicked`).then().catch(Error => {
                message.reply(`I was Unable To Kick Member ${AUTO_KICK} || Error: ${Error}`);
                console.log(Error);
            })
        }
    }

    switch (args[0]) {
        case 'list':
            message.channel.sendMessage(users);
            break;

        case 'website':
            message.channel.sendMessage(WEBSITE_URL);
            break;

        case 'add':
            ADD_USER = message.mentions.users.first();
            users.add(ADD_USER);
            message.reply(`User ${ADD_USER} Was Added To The Database`);
            break;

        case 'auto-kick':
            AUTO_KICK = false;
            message.reply(`Auto Kick Is Now ${AUTO_KICK.valueOf()}`);
            break;

        case 'kick':
            // add ban script here
            const user = message.mentions.users.first();
            const USER_ROLE = message.member.roles;

            if (USER_ROLE.some(role => role.name === 'Moderator')) {
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {
                        member.kick('You Were Kicked By The Admin').then(() => {
                            message.reply(`Member Kick Successfully ${user.tag}`);
                        }).catch(Error => {
                            message.reply(`I was Unable To Kick Member ${user.tag} || Error: ${Error}`);
                            console.log(Error);
                        })
                    } else {
                        message.reply("That Member isn't in this server");
                    }
                }
            }
            break;

        case 'list-mods':
            message.channel.sendMessage(users[2]);
            message.channel.sendMessage(users[4]);
            break;

        case 'teamapp':
            message.channel.sendMessage(`Check Out The Pink Team Team app Here => ${TEAMAPP}`);
            break;

        case 'info':
            if ('version') {
                message.channel.sendMessage("Version " + bot_version);
            } else {
                message.channel.sendMessage("You can use ?info version or ?info author");
            }
            if ('author') {
                message.channel.sendMessage(`Made By ${AUTHOR} @github`);
            } else {
                message.channel.sendMessage("You can use ?info version or ?info author");
            }

            break;
    }
});

bot.on('ready', () => {
    console.log("Bot Is Ready Running Version "+bot_version);
    bot.on('ready', () => {
        message.channel.sendMessage(`Here's A List Of Commands: !info, list-mods, kick, auto-kick true or false, add adds a user to the join list, website to show the website ${WEBSITE_URL}, list lists users in the join list, team app to show team app.`);
    })
});

bot.login(token);