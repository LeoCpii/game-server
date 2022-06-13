import { ICoordinate, IKey, IPlayer, ISkin } from './dto';
export declare class Player implements IPlayer {
    _id: number;
    coordinate: ICoordinate;
    key: IKey;
    skin: ISkin;
    constructor(data: IPlayer);
}
export declare const new_instance_player: (id?: number) => IPlayer;
