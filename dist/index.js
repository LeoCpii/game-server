"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dgram_1 = tslib_1.__importDefault(require("dgram"));
const dto_1 = require("./dto");
const ACTION = tslib_1.__importStar(require("./actions"));
class Server {
    constructor() {
        this.on();
        Server.socket.bind(8081, () => this.print());
    }
    on() {
        Server.socket.on('message', (msg, rinfo) => {
            Server.data = JSON.parse(String(msg));
            const fn = dto_1.EMsg[Server.data.type];
            ACTION[fn](Server.data, Server.hosts);
            this.send(Server.data, rinfo);
        });
    }
    send(data, rinfo) {
        Server.socket.send(JSON.stringify(data), rinfo.port, rinfo.address);
        console.log(Server.hosts);
    }
    print() {
        console.log('------------------------------------');
        console.log(`🚀 Server is running on port ${Server.PORT} 🚀`);
        console.log('------------------------------------');
    }
}
Server.PORT = 8081;
Server.hosts = [];
Server.socket = dgram_1.default.createSocket('udp4');
new Server();
//# sourceMappingURL=index.js.map