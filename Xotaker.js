var LivingCreature = require("./LivingCreature.js")
module.exports = class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 7;

    }
    getNewDirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirection();
        return super.chooseCell(character);
    }

    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 5) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            var neXt = new Xotaker(newX, newY);
            xotakerArr.push(neXt)

        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        this.energy--
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1);
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy += 3;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y)
                    xotakerArr.splice(i, 1)
            }
        }
    }
}