/** È o teste */
import { Client, Intents } from "discord.js";

const intents = [Intents.FLAGS.GUILDS];

class Bot {
    public static client: Client;
    constructor(private token: string) {
        Bot.client = new Client({ intents });
        Bot.client.on("ready", () => {
            if (Bot.client.user) {
                console.log(`Bot est√° online: ${Bot.client.user.tag}`);
                Bot.client.user.setPresence({
                    activities: [{
                        name: 'verdades',
                        type: 'PLAYING'
                    }],
                });
            }
        });
    }
    start() {
        Bot.client.login(this.token);
    }
}

export default Bot;