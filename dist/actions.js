"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JOIN_HOST = exports.GET_HOSTS = exports.STOP_HOST = exports.CREATE_HOST = exports.GET_NEW_PLAYERS = exports.GET_PLAYER_STAT = exports.SET_PLAYER_STAT = void 0;
const player_1 = require("./player");
const SET_PLAYER_STAT = (data, hosts) => {
    console.log('SET_PLAYER_STAT');
    hosts[data.host][data._id].key.up = data.key.up;
    hosts[data.host][data._id].key.down = data.key.down;
    hosts[data.host][data._id].key.left = data.key.left;
    hosts[data.host][data._id].key.right = data.key.right;
    hosts[data.host][data._id].coordinate.x = data.coordinate.x;
    hosts[data.host][data._id].coordinate.y = data.coordinate.y;
};
exports.SET_PLAYER_STAT = SET_PLAYER_STAT;
const GET_PLAYER_STAT = (data, hosts) => {
    console.log('GET_PLAYER_STAT');
    data.player_stat = hosts[data.host][data._id];
};
exports.GET_PLAYER_STAT = GET_PLAYER_STAT;
const GET_NEW_PLAYERS = (data, hosts) => {
    console.log('GET_NEW_PLAYERS', JSON.stringify(data));
    data.players = hosts[data.host];
};
exports.GET_NEW_PLAYERS = GET_NEW_PLAYERS;
const CREATE_HOST = (data, hosts) => {
    console.log('CREATE_HOST');
    const host_number = hosts.length;
    const instance = (0, player_1.new_instance_player)();
    hosts.push([new player_1.Player(instance)]);
    data.host = host_number;
    data._id = 0;
};
exports.CREATE_HOST = CREATE_HOST;
const STOP_HOST = (data, hosts) => {
    console.log('STOP_HOST');
    hosts.splice(data.host, 1);
    data.res = 'stoped';
};
exports.STOP_HOST = STOP_HOST;
const GET_HOSTS = (data, hosts) => {
    console.log('GET_HOSTS');
    data.hosts = hosts;
};
exports.GET_HOSTS = GET_HOSTS;
const JOIN_HOST = (data, hosts) => {
    console.log('JOIN_HOST');
    const num_of_players = hosts[data.host].length;
    const instance = (0, player_1.new_instance_player)(num_of_players);
    hosts[data.host].push(new player_1.Player(instance));
    data._id = num_of_players;
};
exports.JOIN_HOST = JOIN_HOST;
//# sourceMappingURL=actions.js.map