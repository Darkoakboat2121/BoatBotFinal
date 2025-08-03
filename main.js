import { Client, Events, GatewayIntentBits, REST, Routes } from "discord.js"
import 'dotenv'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

const admins = [
    'Darkoakboat2121'
]

client.on(Events.MessageCreate, (evd) => {
    // if (admins.includes(evd.author.tag)) return
    if (evd.content.toLowerCase().startsWith('hi boatbot')) {
        evd.reply('Hiya! I\'m Boatbot!')
    }
})

const BOT_KEY = process.env.BOT_KEY
client.login(BOT_KEY)