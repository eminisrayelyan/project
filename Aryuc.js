class Aryuc {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 9;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 6) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            var ar = new Aryuc(newX, newY);
            AryucArr.push(ar)
        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        this.energy -= 3
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {
        var food = random(this.chooseCell(3))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for (var i in GishatichArr) {
                if (GishatichArr[i].x == newX && GishatichArr[i].y == newY) {
                    GishatichArr.splice(i, 1);
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy += 4;
        }
    }
    eat2() {
        var food = random(this.chooseCell(4))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for (var i in AmenatesArr) {
                if (AmenatesArr[i].x == newX && AmenatesArr[i].y == newY) {
                    AmenatesArr.splice(i, 1);
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
            for (var i in AryucArr) {
                if (AryucArr[i].x == this.x && AryucArr[i].y == this.y)
                    AryucArr.splice(i, 1)
            }
        }
    }
}