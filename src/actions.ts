import { IData, IPlayer } from './dto';
import { new_instance_player, Player } from './player';

export const SET_PLAYER_STAT = (data: IData, hosts: Array<IPlayer[]>) => {
    console.log('SET_PLAYER_STAT');

    hosts[data.host][data._id].key.up = data.key.up;
    hosts[data.host][data._id].key.down = data.key.down;
    hosts[data.host][data._id].key.left = data.key.left;
    hosts[data.host][data._id].key.right = data.key.right;
    hosts[data.host][data._id].coordinate.x = data.coordinate.x;
    hosts[data.host][data._id].coordinate.y = data.coordinate.y;
};

export const GET_PLAYER_STAT = (data: IData, hosts: Array<IPlayer[]>) => {
    console.log('GET_PLAYER_STAT');
    data.player_stat = hosts[data.host][data._id];
};

export const GET_NEW_PLAYERS = (data: IData, hosts: Array<IPlayer[]>) => {
    console.log('GET_NEW_PLAYERS', JSON.stringify(data));
    data.players = hosts[data.host];
};

export const CREATE_HOST = (data: IData, hosts: Array<IPlayer[]>) => {
    console.log('CREATE_HOST');
    const host_number = hosts.length;

    const instance = new_instance_player();
    hosts.push([new Player(instance)]);

    data.host = host_number;
    data._id = 0;
};

export const STOP_HOST = (data: IData, hosts: Array<IPlayer[]>) => {
    console.log('STOP_HOST');
    hosts.splice(data.host, 1);
    data.res = 'stoped';
};

export const GET_HOSTS = (data: IData, hosts: Array<IPlayer[]>) => {
    console.log('GET_HOSTS');
    data.hosts = hosts;
};

export const JOIN_HOST = (data: IData, hosts: Array<IPlayer[]>) => {
    console.log('JOIN_HOST');
    const num_of_players = hosts[data.host].length;

    const instance = new_instance_player(num_of_players);
    hosts[data.host].push(new Player(instance));
    data._id = num_of_players;
};