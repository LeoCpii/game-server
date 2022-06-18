import dgram from 'dgram';
import { EMsg, IData, IPlayer } from './dto';
import Action from './actions';
import dotenv from 'dotenv';

class Server {
    static readonly PORT = process.env.PORT || 3000;
    static data: IData;
    static hosts: Array<IPlayer[]> = [];
    static socket = dgram.createSocket('udp4');

    constructor() {
        dotenv.config();
        this.on();
        Server.socket.bind(Number(Server.PORT), () => this.print());
    }

    private on() {
        Server.socket.on('message', (msg, rinfo) => {
            Server.data = JSON.parse(String(msg));
            const fn = EMsg[Server.data.type];
            Action[fn](Server.data, Server.hosts);
            this.send(Server.data, rinfo);
        });
    }

    private send(data: IData, rinfo: dgram.RemoteInfo) {
        Server.socket.send(JSON.stringify(data), rinfo.port, rinfo.address);

        if (['true'].includes(String(process.env.DEBUG))) {
            console.table(Server.hosts);
        }
    }

    private print() {
        console.log('------------------------------------');
        console.log(`🚀 Server is running on port ${Server.PORT} 🚀`);
        console.log('------------------------------------');
    }
}

new Server();
