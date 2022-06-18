export interface IData {
    type: EMsg;
    players: IPlayer[];
    hosts: Array<IPlayer[]>;
    _id: number;
    host: number;
    res: 'stoped';
    up: number;
    down: number;
    left: number;
    right: number;
    x: number;
    y: number;
    player_stat: any;
    equipment: IEquipment;
    coordinate: ICoordinate;
    key: IKey;
    skin: ISkin;
}

export interface IPlayer {
    _id: number;
    coordinate: ICoordinate;
    key: IKey;
    skin: ISkin;
    equipment: IEquipment
}

export interface ICoordinate {
    x: number;
    y: number;
}

export interface IKey {
    up: number;
    down: number;
    left: number;
    right: number;
}

export interface ISkin {
    hat: number;
    face: number;
    glasses: number;
}

export interface IEquipment {
    gun: number;
}

export enum EMsg {
    CREATE_HOST,
    JOIN_HOST,
    STOP_HOST,
    SET_PLAYER_STAT,
    GET_PLAYER_STAT,
    GET_HOSTS,
    GET_PLAYERS_FROM_SERVER
}
