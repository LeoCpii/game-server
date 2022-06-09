var dgram = require("dgram");

var server = dgram.createSocket("udp4");

var data;
var hosts = [];

const msg_type = {
    CREATE_HOST: 0,
    JOIN_HOST: 1,
    STOP_HOST: 2,
    SET_PLAYER_STAT: 3,
    GET_PLAYER_STAT: 4,
    GET_HOSTS: 5,
    GET_NEW_PLAYERS: 6
}

function player(player_number, x, y, up, down, left, right) {
    this.player_number = player_number;
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    this.x = x;
    this.y = y;
}

server.on("message", (msg, rinfo) => {
    data = JSON.parse(msg);
    switch (data.type) {
        case msg_type.SET_PLAYER_STAT:
            set_player_stat(data, rinfo);
            break;
        case msg_type.GET_PLAYER_STAT:
            get_player_stat(data, rinfo);
            break;
        case msg_type.GET_NEW_PLAYERS:
            get_players(data, rinfo);
            break;
        case msg_type.CREATE_HOST:
            create_host(data, rinfo);
            break;
        case msg_type.STOP_HOST:
            stop_host(data, rinfo);
            break;
        case msg_type.GET_HOSTS:
            get_hosts(data, rinfo);
            break;
        case msg_type.JOIN_HOST:
            join_host(data, rinfo);
            break;
        default:
            break;
    }
});

function set_player_stat(data, rinfo) {
    console.log('set_player_stat');

    hosts[data.host_number][data.player_number].up = data.up;
    hosts[data.host_number][data.player_number].down = data.down;
    hosts[data.host_number][data.player_number].left = data.left;
    hosts[data.host_number][data.player_number].right = data.right;
    hosts[data.host_number][data.player_number].x = data.x;
    hosts[data.host_number][data.player_number].y = data.y;
}

function get_player_stat(data, rinfo) {
    console.log('get_player_stat');

    data.player_stat = hosts[data.host_number][data.player_number];
    server.send(JSON.stringify(data), rinfo.port, rinfo.address);
}

function create_host(data, rinfo) {
    console.log("create_host");
    var host_number = hosts.length;
    hosts.push([new player(0, 100, 150, 0, 0, 0, 0)]);

    data.host_number = host_number;
    data.player_number = 0;

    server.send(JSON.stringify(data), rinfo.port, rinfo.address);
    console.table(hosts);
}

function stop_host(data, rinfo) {
    console.log("stop_host");
    hosts.splice(data.host_number, 1);
    data.res = "stoped";

    server.send(JSON.stringify(data), rinfo.port, rinfo.address);
    console.table(hosts)
}

function join_host(data, rinfo) {
    console.log("join_hosts");
    var num_of_players = hosts[data.host_number].length;
    hosts[data.host_number].push(new player(num_of_players, 100, 150, 0, 0, 0, 0));
    data.player_number = num_of_players;

    server.send(JSON.stringify(data), rinfo.port, rinfo.address);
    console.table(hosts)
}

function get_hosts(data, rinfo) {
    console.log("get_hosts");
    data.hosts = hosts;
    server.send(JSON.stringify(data), rinfo.port, rinfo.address);
}

function get_players(data, rinfo) {
    console.log('get_players');
    data.players = hosts[data.host_number];
    server.send(JSON.stringify(data), rinfo.port, rinfo.address);
}

server.bind(8080);