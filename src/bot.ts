import Bot from "./classes/Bot";
import { config } from 'dotenv';
import Rest from "./classes/Rest";
import Commands from "./commands";
import CommandListener from "./classes/CommandListener";

config();

const init = () => {
    if (!process.env.TOKEN) {
        console.error("TOKEN NÃO ENCONTRADO");
        return;
    }
    if (!process.env.CLIENT_ID) {
        console.error("CLIENT_ID NÃO ENCONTRADO");
        return;
    }
    const bot = new Bot(process.env.TOKEN);
    const rest = new Rest(process.env.TOKEN, process.env.CLIENT_ID);
    const commands = new CommandListener(Commands);

    rest.start();
    rest.registerCommands(Commands);
    bot.start();
};

init();