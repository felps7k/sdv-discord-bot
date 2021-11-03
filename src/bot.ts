import Bot from "./class/Bot";
import { config } from 'dotenv';

config();

const init = () => {
    if (!process.env.TOKEN) {
        console.error("TOKEN NÃO ENCONTRADO");
        return;
    }
    const bot = new Bot(process.env.TOKEN);
    bot.start();
}

init();