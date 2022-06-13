"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.new_instance_player = exports.Player = void 0;
class Player {
    constructor(data) {
        this._id = data._id;
        this.coordinate = data.coordinate;
        this.key = data.key;
        this.skin = data.skin;
    }
}
exports.Player = Player;
const new_instance_player = (id = 0) => ({
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
    }
});
exports.new_instance_player = new_instance_player;
//# sourceMappingURL=player.js.map