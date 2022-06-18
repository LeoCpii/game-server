import { ICoordinate, IEquipment, IKey, IPlayer, ISkin } from './dto';

export class Player implements IPlayer {
    public _id: number;
    public coordinate: ICoordinate;
    public key: IKey;
    public skin: ISkin;
    public equipment: IEquipment;

    constructor(data: IPlayer) {
        this._id = data._id;
        this.coordinate = data.coordinate;
        this.key = data.key;
        this.skin = data.skin;
        this.equipment = data.equipment;
    }
}

export const new_instance_player = (id = 0): IPlayer => ({
    _id: id,
    coordinate: {
        x: 100,
        y: 150
    },
    key: {
        up: 0,
        down: 0,
        left: 0,
        right: 0
    },
    skin: {
        hat: 0,
        face: 0,
        glasses: 0
    },
    equipment: {
        gun: 0
    }
});
