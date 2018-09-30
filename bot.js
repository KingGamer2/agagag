const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"


client.on('message', msg => {
  if(msg.content.startsWith(prefix + "sug")) {
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', 'suggestions')) return msg.reply('**الرجاء إضافة روم بإسم (suggestions)**');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply(`**الرجاء كتابة اقتراح**`)
    //غيره على حسب اسم روم suggestions او سوي مثل اسم الروم الموجود هنا
    if(msg.guild.channels.find('name', 'suggestions')) {
      //غيره هنا كمان اذا غيرت فوق
      msg.guild.channels.find('name', 'suggestions').send(`
      **اقتراح جديد من** : ${msg.member}  

      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')} : **الاقتراح** 
      `)
      .then(function (message) {
        message.react('✅')
        message.react('❌')
      })
      }
    }

});

client.on('message', async message => {
  if(message.content.startsWith(prefix + "report")) {
    await message.channel.send("** إن كان الابلاغ عن شخص اكتب الاسم و التاق**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('** ما سبب الابلاغ بالتفصيل ؟**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();

 message.channel.send('جاري تقديم الابلاغ ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم الابلاغ وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'reports')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle(`**إبلاغ جديد**:`)
.setDescription(`  **اسم الشخص**  : \n ${lan}\n   **سبب الايلاغ** :\n ${md} \n   تم الابلاغ بواسطة  : <@${message.author.id}> `)  
          .setFooter(`AG BOT`)
.setTimestamp()
});
}        
})
})
})
})
})
 }
})

client.login(process.env.BOT_TOKEN);
