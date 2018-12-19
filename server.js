var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);
var cl = false
io.on("connection", function (socket) {
  if (cl) {
    setInterval(drawserverayin, 200);
    cl = true;
  }
});
matrix = [];
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
var Grass = require("./Grass.js");
var Xotaker = require("./Xotaker.js");
var Gishatich = require("./Gishatich.js");
var Amenates = require("./Amenates.js");
var Aryuc = require("./Aryuc.js");

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
grassArr = [];
xotakerArr = [];
GishatichArr = [];
AmenatesArr = [];
AryucArr = [];
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
function drawserverayin() {
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
  console.log(matrix)
  io.sockets.emit("matrix", matrix)

}
setInterval(drawserverayin, 200)
io.on("connection", function (socket) {
});


