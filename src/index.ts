import dgram from 'dgram';
import { EMsg, IData, IPlayer } from './dto';
import * as ACTION from './actions';

class Server {
    static readonly PORT = 8081;
    static data: IData;
    static hosts: Array<IPlayer[]> = [];
    static socket = dgram.createSocket('udp4');

    constructor() {
        this.on();
        Server.socket.bind(8081, () => this.print());
    }

    private on() {
        Server.socket.on('message', (msg, rinfo) => {
            Server.data = JSON.parse(String(msg));
            const fn = EMsg[Server.data.type];
            ACTION[fn](Server.data, Server.hosts);
            this.send(Server.data, rinfo);
        });
    }

    private send(data: IData, rinfo: dgram.RemoteInfo) {
        Server.socket.send(JSON.stringify(data), rinfo.port, rinfo.address);
        console.log(Server.hosts);
    }

    private print() {
        console.log('------------------------------------');
        console.log(`🚀 Server is running on port ${Server.PORT} 🚀`);
        console.log('------------------------------------');
    }
}

new Server();