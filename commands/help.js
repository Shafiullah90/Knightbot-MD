const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || 'KnightBot-MD'}*  
   Version: *${settings.version || '2.0.5'}*
   by ${settings.botOwner || 'Mr Unique Hacker'}
   YT : ${global.ytch}
╚═══════════════════╝

┏❐═══════════════════╗
┃ 🔒 *Owner Commands*
┗❐═══════════════════╝
➤ 🔴 .ban 
➤ 🔵 .unban 
➤ 👑 .promote 
➤ 👥 .demote 
➤ 🔕 .mute 
➤ 🔊 .unmute 
➤ 🗑️ .delete 
➤ 👋 .kick 
➤ ⚠️ .warnings 
➤ ⚠️ .warn 
➤ 🚫 .antilink 
➤ 🚫 .antibadword 
➤ 🧹 .clear 
➤ 👥 .tag 
➤ 👥 .tagall 
➤ 🤖 .chatbot 
➤ 🔗 .resetlink 
➤ 👋 .welcome 
➤ 👋 .goodbye

┏❐═══════════════════╗
┃ 🌐 *General Commands*
┗❐═══════════════════╝
➤ 📜 .menu 
➤ 📶 .ping 
➤ ⏱️ .runtime 
➤ 🔊 .tts 
➤ 👑 .owner 
➤ 😂 .joke 
➤ 💬 .quote 
➤ 🧠 .fact 
➤ 🌦️ .weather 
➤ 📰 .news 
➤ 💌 .attp 
➤ 🎵 .lyrics 
➤ 🎱 .8ball 
➤ ℹ️ .groupinfo 
➤ 👮 .admins 
➤ 🔍 .jid 
➤ 📸 .ss 
➤ 🌍 .trt 
➤ 📞 .vv

┏❐═══════════════════╗
┃ ⚙️ *Settings Commands*
┗❐═══════════════════╝
➤ 🌐 .public 
➤ 🔐 .private 
➤ 🟢 .autostatus 
➤ 📖 .autoread 
➤ 🧹 .clearsession 
➤ 🛡️ .antidelete 
➤ 🧼 .cleartmp 
➤ 💬 .autoreact 
➤ 🖼️ .getpp 
➤ 📸 .setpp 
➤ 📜 .autobio 
➤ ⌨️ .autotyping 
➤ 🎙️ .autorecording

┏❐═══════════════════╗
┃ 🎨 *Sticker Commands*
┗❐═══════════════════╝
➤ 🌀 .blur 
➤ 🖼️ .simage 
➤ 🌟 .sticker 
➤ 🐯 .tgsticker 
➤ 🤣 .meme 
➤ 🎯 .take 
➤ 🔀 .emojimix

┏❐═══════════════════╗
┃ 🎮 *Game Commands*
┗❐═══════════════════╝
➤ ❌⭕ .tictactoe 
➤ 🎯 .hangman 
➤ ❓ .guess 
➤ 🧠 .trivia 
➤ ✍️ .answer 
➤ 🤐 .truth 
➤ 😈 .dare

┏❐═══════════════════╗
┃ 🧠 *AI & Search*
┗❐═══════════════════╝
➤ 🤖 .gpt 
➤ 💡 .gptgo 
➤ 🧬 .gemini 
➤ 🧠 .flux 
➤ 🎨 .imagine

┏❐═══════════════════╗
┃ 🎭 *Fun Commands*
┗❐═══════════════════╝
➤ 💘 .compliment 
➤ 😡 .insult 
➤ 😍 .flirt 
➤ 📜 .shayari 
➤ 🌙 .goodnight 
➤ 🌹 .roseday 
➤ 🎭 .character 
➤ ☠️ .wasted 
➤ 🚢 .ship 
➤ 😈 .simp 
➤ 🤪 .stupid 
➤ 🧠 .brainwash 
➤ 🐔 .detect 
➤ 👻 .ghost 
➤ 🧠 .mindread 
➤ 💩 .toilet 
➤ 📞 .callmom 
➤ 💘 .crush 
➤ 🪞 .mirror 
➤ 🛐 .auntyalert 
➤ 💣 .explode 
➤ 🔓 .unhack 
➤ 🕵️ .spy 
➤ 💨 .bombgas 
➤ 🛏️ .bedrate 
➤ 🤰 .pregnancycheck 
➤ 💘 .lovecheck 
➤ 🌈 .gaycheck 
➤ 🏳️‍🌈 .gaydetector 
➤ 🔥 .hornycheck 
➤ 😻 .pussylover
➤.🧑‍💻 .shafihack/shack
┏❐═══════════════════╗
┃ 🧰 *Maker Menu*
┗❐═══════════════════╝
➤ 🔥 .fire
➤ ⚡ .thunder 
➤ ❄️ .ice 
➤ 🌫️ .snow 
➤ 👹 .devil 
➤ 💜 .purple 
➤ 💡 .light 

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'KnightBot MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'KnightBot MD by Mr Unique Hacker',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
