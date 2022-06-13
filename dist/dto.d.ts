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
    coordinate: ICoordinate;
    key: IKey;
    skin: ISkin;
}
export interface IPlayer {
    _id: number;
    coordinate: ICoordinate;
    key: IKey;
    skin: ISkin;
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
export declare enum EMsg {
    CREATE_HOST = 0,
    JOIN_HOST = 1,
    STOP_HOST = 2,
    SET_PLAYER_STAT = 3,
    GET_PLAYER_STAT = 4,
    GET_HOSTS = 5,
    GET_NEW_PLAYERS = 6
}
