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

const badWords = [
    'test'
]

client.on(Events.MessageCreate, (evd) => {
    // if (admins.includes(evd.author.tag)) return
    if (evd.content === badWords[0]) evd.delete()
})

const BOT_KEY = process.env.BOT_KEY
client.login(BOT_KEY)