class Grass extends LivingCreature{
    constructor(x, y, index) {
        super(x,y);
        this.index = index;
        this.energy = 9;
        
        
    }

    mult() {
        var empty = random(this.chooseCell(0));
        this.multiply++
        if (empty && this.multiply > 4) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 1;
            var neGr = new Grass(newX, newY);
            grassArr.push(neGr)
        }
    }
}