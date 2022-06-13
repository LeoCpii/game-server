import { IData, IPlayer } from './dto';
export declare const SET_PLAYER_STAT: (data: IData, hosts: Array<IPlayer[]>) => void;
export declare const GET_PLAYER_STAT: (data: IData, hosts: Array<IPlayer[]>) => void;
export declare const GET_NEW_PLAYERS: (data: IData, hosts: Array<IPlayer[]>) => void;
export declare const CREATE_HOST: (data: IData, hosts: Array<IPlayer[]>) => void;
export declare const STOP_HOST: (data: IData, hosts: Array<IPlayer[]>) => void;
export declare const GET_HOSTS: (data: IData, hosts: Array<IPlayer[]>) => void;
export declare const JOIN_HOST: (data: IData, hosts: Array<IPlayer[]>) => void;
