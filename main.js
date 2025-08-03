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

const lastMessages = new Map()

client.on(Events.MessageCreate, (evd) => {
    const userID = evd.author.id
    const content = evd.content.trim()

    if (!admins.includes(evd.author.tag)) {
        if (lastMessages.get(userID) === content.toLowerCase()) {
            evd.delete()
            return
        } else {
            lastMessages.set(userID, content)
        }
    }

    if (content.toLowerCase().startsWith('hi boatbot')) {
        evd.reply('Hiya! I\'m Boatbot!')
    }
    if (content.toLowerCase().startsWith('wsg boatbot')) {
        
    }
})

const BOT_KEY = process.env.BOT_KEY
client.login(BOT_KEY)