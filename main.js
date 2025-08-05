import { Client, Events, GatewayIntentBits, REST, Routes } from "discord.js"
import 'dotenv'
import express from 'express'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions
    ]
})

const admins = [
    'Darkoakboat2121'
]

const lastMessages = new Map()
let helper = ''

client.on(Events.MessageCreate, (evd) => {
    const userID = evd.author.id
    const content = evd.content.trim()

    if (userID === client.user.id) return

    if (!admins.includes(evd.author.displayName)) {
        if (lastMessages.get(userID) === content.toLowerCase()) {
            evd.delete()
            return
        } else {
            lastMessages.set(userID, content)
        }

        if (content.includes('https://discord.com/invite')) {
            evd.delete()
            evd.author.send('Advertisements aren\'t allowed here')
        }

        if (content.includes('@everyone')) {
            evd.delete()
            evd.author.send('Don\'t ping everyone!')
        }
    }

    if (content.toLowerCase().includes('download')) {
        evd.reply(`Hiya! If you\'re looking for the download, check #addons ^_^\nMake sure to get both the resource and behavior pack! If you need help, feel free to reply to this message with "help"`).then((revd) => {
            helper = revd.id
        })
        return
    }

    if (
        (evd.reference && evd.reference.messageId === helper && content.toLowerCase().includes('help')) || 
        (content.toLowerCase().includes('help') && content.toLowerCase().includes('boatbot'))
    ) {
        evd.reply(`If your issue is related to realms, try deleting the pack and reinstalling. If your issue is related to the pack not working after an update, the pack most likely needs an update.`)
    }

    let uwu = ''
    if (content.toLowerCase().includes('uwu')) {
        uwu = 'uwu'
    }

    if (content.toLowerCase().startsWith('hi boatbot')) {
        evd.reply(`Hiya! I\'m Boatbot! ${uwu}`)
        return
    }
    if (content.toLowerCase().startsWith('wsg boatbot')) {
        evd.reply(`I\'m sailing lol ${uwu}`)
        return
    }


})

const BOT_KEY = process.env.BOT_KEY
client.login(BOT_KEY)


const app = express()
app.get('/', (req, res) => {
    res.send('Boatbot Online!')
})
app.listen(3000, () => {
    console.log('Online on port 3000')
})