const SlackBot = require('slackbots');
const axios = require('axios');
const _ = require('lodash');

const bot = new SlackBot({
    token: 'xoxb-233891438262-704837343828-JLe1vlkc0MnIoRk8XCCZbDFh',
    name: 'weather-bot'
});

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
    };

    bot.postMessageToChannel(
        'slackbotchannel',
        'Wanna know more about weather??, I am @weatherbot! I am happy to help',
        params
    );
});

// Error Handler
bot.on('error', err => console.log(err));

// Message Handler
bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }

    handleMessage(data.text);
});

// Respons to Data
function handleMessage(message) {
    if(message.includes(' hi') || message.includes(' hello') || message.includes(' namaste')) {
        answerGreetings();
    } else if (message.includes(' weather around me')) {
        weatherAroundMe();
    } else if (message.includes(' yomama')) {
        yoMamaJoke();
    } else if (message.includes(' random')) {
        randomJoke();
    } else if (message.includes(' help')) {
        runHelp();
    }
}

// Tell a Chuck Norris Joke
function answerGreetings() {
    const params = {
        icon_emoji: '::pray::'
    };

    bot.postMessageToChannel('slackbotchannel',
        `Hello there, Wanna know more about weather around? Just ask me "weather around me", "weather in and city"`,
        params);
}


// Tell a Chuck Norris Joke
function weatherAroundMe() {
    const params = {
        icon_emoji: ':laughing:'
    };

    bot.postMessageToChannel('slackbotchannel', `Its 25 C`, params);
}

// Show Help Text
function runHelp() {
    const params = {
        icon_emoji: ':question:'
    };

    bot.postMessageToChannel(
        'slackbotchannel',
        `Type @weatherbot with either`,
        params
    );
}