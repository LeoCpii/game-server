import { IData, IPlayer } from './dto';
import { new_instance_player, Player } from './player';
import { log } from './log';

class Action {
    @log()
    public SET_PLAYER_STAT(data: IData, hosts: Array<IPlayer[]>) {
        hosts[data.host][data._id].key = data.key;
        hosts[data.host][data._id].coordinate = data.coordinate;
        hosts[data.host][data._id].skin = data.skin;
        hosts[data.host][data._id].equipment = data.equipment;
    }

    @log()
    public GET_PLAYER_STAT(data: IData, hosts: Array<IPlayer[]>) {
        data.player_stat = hosts[data.host][data._id];
    }

    @log()
    public GET_PLAYERS_FROM_SERVER(data: IData, hosts: Array<IPlayer[]>) {
        data.players = hosts[data.host];
    }

    @log()
    public CREATE_HOST(data: IData, hosts: Array<IPlayer[]>) {
        const host_number = hosts.length;

        const instance = new_instance_player();
        hosts.push([new Player(instance)]);

        data.host = host_number;
        data._id = 0;
    }

    @log()
    public STOP_HOST(data: IData, hosts: Array<IPlayer[]>) {
        hosts.splice(data.host, 1);
        data.res = 'stoped';
    }

    @log()
    public GET_HOSTS(data: IData, hosts: Array<IPlayer[]>) {
        data.hosts = hosts;
    }

    @log()
    public JOIN_HOST(data: IData, hosts: Array<IPlayer[]>) {
        const num_of_players = hosts[data.host].length;

        const instance = new_instance_player(num_of_players);
        hosts[data.host].push(new Player(instance));
        data._id = num_of_players;
    }
}

export default new Action();
