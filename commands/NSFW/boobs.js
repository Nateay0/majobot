const Discord = require("discord.js");
const rp = require("request-promise-native");
const { nsfw } = require("../../utilities/nsfw")

module.exports = {
 name: "boobs",
 aliases: ["tits"],
 description: "Display a random boobs image/gif",
 category: "NSFW",
 usage: "boobs",
 run: async (client, message, args) => {
  if (nsfw(message)) return;
  return rp
   .get("http://api.oboobs.ru/boobs/0/1/random")
   .then(JSON.parse)
   .then(function (res) {
    return rp.get({
     url: "http://media.oboobs.ru/" + res[0].preview,
     encoding: null,
    });
   })
   .then(function (res) {
    const embed = new Discord.MessageEmbed() // Prettier()
     .setTitle(
      ":smirk: Boobs",
      message.guild.iconURL({
       dynamic: true,
       format: "png",
      })
     )
     .setColor("RANDOM")
     .setImage("attachment://boobs.png")
     .attachFiles([
      {
       attachment: res,
       name: "ass.png",
      },
     ])
     .setFooter(
      "Requested by " + `${message.author.username}`,
      message.author.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      })
     )
     .setTimestamp();
    message.channel.send(embed);
   })
   .catch((err) =>
    message.channel.send({
     embed: {
      color: 16734039,
      description: "Something went wrong... :cry:",
     },
    })
   );
 },
};
