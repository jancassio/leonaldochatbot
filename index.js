if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

var drinks = [
  'agua','water','refri','breja','cerveja',
  'tubaina','refrigerante','leite','café','cafe'
]

controller.hears(drinks, ['message_received','ambient','direct_message','direct_mention','mention'], function(bot, message){
  bot.reply(message,'TOMA CACHAÇA CARAI!');
})


controller.hears(['pinga','cachaça', 'cana'], ['message_received','ambient','direct_message','direct_mention','mention'], function(bot, message){
  var opts = [
    'Eu só bebo di latinha!',
    'Quandu bebu, eu num mi controlu!'
  ]

  var selected = opts[ Math.round(Math.random()) ]

  bot.reply(message,selected);
})
