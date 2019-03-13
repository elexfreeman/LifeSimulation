import { BotBrainClass } from './BotBrain';

import { bots } from './Bots';

export function BotController(socket) {
    let bot = new BotBrainClass();
    /* обработка событий текущего состояния */
    socket.on('state message', bot.onStateMessage);
    socket.on('frame message', bot.onGetFrame);
    socket.on('disconnect', bot.onDisconnect);
}