import LotusBot from './lib/lotusbot'
import RestyAPI from './lib/api'


const api = new RestyAPI();
api.init();
const lotusbot = new LotusBot();
lotusbot.init().catch((e: Error) => console.log(e))
