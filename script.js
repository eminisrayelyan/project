var matrix = [];
matrix = fillMatrix(100, 100)
console.log(matrix)
function fillMatrix(n, m) {
  var matrix = []
  for (var i = 0; i < n; i++) {
    matrix.push([])
    for (var a = 0; a < m; a++) {

      matrix[i].push(0)
    }
  }
  return matrix
}


for (var a = 0; a < 400; a++) {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)
  matrix[y][x] = 1
}
for (var b = 0; b < 350; b++) {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)
  matrix[y][x] = 2
}
for (var c = 0; c < 450; c++) {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)
  matrix[y][x] = 3
}
for (var d = 0; d < 260; d++) {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)
  matrix[y][x] = 4
}
for (var e = 0; e < 240; e++) {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)
  matrix[y][x] = 5
}
var side = 7;
var grassArr = [];
var xotakerArr = [];
var GishatichArr = [];
var AmenatesArr = [];
var AryucArr = [];
for (var y = 0; y < matrix.length; y++) {
  for (var x = 0; x < matrix[y].length; x++) {
    if (matrix[y][x] == 1) {
      var gr = new Grass(x, y, 1)
      grassArr.push(gr)
    }
    else if (matrix[y][x] == 2) {
      var kt = new Xotaker(x, y);
      xotakerArr.push(kt)
    }
    else if (matrix[y][x] == 3) {
      var xr = new Gishatich(x, y);
      GishatichArr.push(xr)
    }
    else if (matrix[y][x] == 4) {
      var am = new Amenates(x, y);
      AmenatesArr.push(am)
    }
    else if (matrix[y][x] == 5) {
      var ar = new Aryuc(x, y);
      AryucArr.push(ar)
    }
  }
}
function setup() {
  frameRate(6);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
}
function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac");
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
      }
      else if (matrix[y][x] == 3) {
        fill("red");
      }
      else if (matrix[y][x] == 4) {
        fill("lightblue")
      }
      else if (matrix[y][x] == 5) {
        fill("orange")
      }
      rect(x * side, y * side, side, side);
    }
  }
  for (var i in grassArr) {
    grassArr[i].mult();
  }
  for (var i in xotakerArr) {
    xotakerArr[i].eat();
    xotakerArr[i].move();
    xotakerArr[i].mult();
    xotakerArr[i].die();
  }
  for (var i in GishatichArr) {
    GishatichArr[i].eat();
    GishatichArr[i].move();
    GishatichArr[i].mult();
    GishatichArr[i].die();
  }
  for (var i in AmenatesArr) {
    AmenatesArr[i].eat();
    AmenatesArr[i].move();
    AmenatesArr[i].mult();
    AmenatesArr[i].die();
  }
  for (var i in AryucArr) {
    AryucArr[i].eat();
    AryucArr[i].eat2();
    AryucArr[i].move();
    AryucArr[i].mult();
    AryucArr[i].die();
  }
}



