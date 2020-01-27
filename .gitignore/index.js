const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready',() => {
    console.log('Bot Ready')
})

bot.login(process.env.token);

bot.on('message', message => { //Attaque Charge
  if(message.content[0]+message.content[1]+message.content[2]+message.content[3]+message.content[4]+message.content[5]+message.content[6] === "/charge"){
    var probafail = Math.floor(Math.random() * Math.floor(100))
    if(message.content.includes("pre")){
      if(message.content.includes("pre-")){
      probafail -= Math.floor(Math.random() * Math.floor(3)) + 3
      }
      if(message.content.includes("pre--")){
        probafail -= Math.floor(Math.random() * Math.floor(5)) + 3
      }
      if(message.content.includes("pre---")){
          probafail -= Math.floor(Math.random() * Math.floor(6)) + 4
      }
    }
    if(probafail >= 90){
      message.channel.send("> L'adversaire esquive votre attaque !")
    }else{
      var crit = Math.floor(Math.random() * Math.floor(100))
      var dégat = Math.floor(Math.random() * Math.floor(2))
      dégat += 3
      if(message.content.includes("atk")){
        if(message.content.includes("atk-")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
        if(message.content.includes("atk--")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
        if(message.content.includes("atk---")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
        if(message.content.includes("atk----")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
        if(message.content.includes("atk-----")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
    }
    if(message.content.includes("atk")){
      if(message.content.includes("atk+")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
      if(message.content.includes("atk++")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
      if(message.content.includes("atk+++")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
      if(message.content.includes("atk++++")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
      if(message.content.includes("atk+++++")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
  }
      if(crit <= 7){
        dégat += Math.floor(Math.random() * Math.floor(4)) + 2
        message.channel.send("> ***COUP CRITIQUE !!***")
      }
      if(message.content[8]+message.content[9] === "SE"){
        dégat + Math.floor(Math.random() * Math.floor(5)) + 3
        message.channel.send("> ***C'est super efficace !***")
      }
      if(message.content[8]+message.content[9] === "PE"){
        dégat -= Math.floor(Math.random() * Math.floor(4)) + 3
        message.channel.send("> *Ce n'est pas trés efficace...*")
      }
      if(dégat <= 0){
        dégat = 1
      }
      message.channel.send("> L'attaque réussie ! L'adversaire subit **" + dégat + "** points de dégats !")
    }
  }
})

bot.on('message', message => { //Attaque Flammèche
  if(message.content[0]+message.content[1]+message.content[2]+message.content[3]+message.content[4]+message.content[5]+message.content[6]+message.content[7]+message.content[8]+message.content[9]=== "/flammèche"){
    var probafail = Math.floor(Math.random() * Math.floor(100))
    if(message.content.includes("pre")){
      if(message.content.includes("pre-")){
      probafail -= Math.floor(Math.random() * Math.floor(3)) + 3
      }
      if(message.content.includes("pre--")){
        probafail -= Math.floor(Math.random() * Math.floor(5)) + 3
      }
      if(message.content.includes("pre---")){
          probafail -= Math.floor(Math.random() * Math.floor(6)) + 4
      }
    }
    if(probafail >= 90){
      message.channel.send("> L'adversaire esquive votre attaque !")
    }else{
      var crit = Math.floor(Math.random() * Math.floor(100))
      var dégat = Math.floor(Math.random() * Math.floor(2))
      dégat += 4
      if(message.content.includes("atk")){
        if(message.content.includes("atk-")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
        if(message.content.includes("atk--")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
        if(message.content.includes("atk---")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
        if(message.content.includes("atk----")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
        if(message.content.includes("atk-----")){
          dégat -= Math.floor(Math.random() * Math.floor(3)) + 2
        }
    }
    if(message.content.includes("atk")){
      if(message.content.includes("atk+")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
      if(message.content.includes("atk++")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
      if(message.content.includes("atk+++")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
      if(message.content.includes("atk++++")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
      if(message.content.includes("atk+++++")){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
      }
  }
      if(crit <= 7){
        dégat += Math.floor(Math.random() * Math.floor(4)) + 3
        message.channel.send("> ***COUP CRITIQUE !!***")
      }
      if(message.content[8]+message.content[9] === "SE"){
        dégat + Math.floor(Math.random() * Math.floor(6)) + 4
        message.channel.send("> ***C'est super efficace !***")
      }
      if(message.content[8]+message.content[9] === "PE"){
        dégat -= Math.floor(Math.random() * Math.floor(6)) + 4
        message.channel.send("> *Ce n'est pas trés efficace...*")
      }
      if(dégat <= 0){
        dégat = 1
      }
      message.channel.send("> L'attaque réussie ! L'adversaire subit **" + dégat + "** points de dégats !")
    }
  }
})
