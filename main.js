import { Client, Events, GatewayIntentBits, REST, Routes } from "discord.js"

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
})

const admins = [
    'Darkoakboat2121'
]

client.on(Events.MessageCreate, (evd) => {
    if (admins.includes(evd.author.tag)) return
    client.emit(Events.MessageCreate, 'test')
})