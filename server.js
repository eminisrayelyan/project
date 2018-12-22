weather = "winter"
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
matrix = fillMatrix(100, 100)
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

for (var a = 0; a < 1000; a++) {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)
  matrix[y][x] = 1
}
for (var b = 0; b < 100; b++) {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)
  matrix[y][x] = 2
}
for (var c = 0; c < 200; c++) {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)
  matrix[y][x] = 3
}
for (var d = 0; d < 60; d++) {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)
  matrix[y][x] = 4
}
for (var e = 0; e < 120; e++) {
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
    if (weather != "winter") {
      grassArr[i].mult();
    }
  }
  for (var i in xotakerArr) {
    xotakerArr[i].eat();
    xotakerArr[i].move();
    if (weather != "spring") {
      xotakerArr[i].mult();
    }
    xotakerArr[i].die();
  }
  for (var i in GishatichArr) {
    GishatichArr[i].eat();
    GishatichArr[i].move();
    if (weather != "autumn") {
      GishatichArr[i].mult();
    }
    GishatichArr[i].die();
  }
  for (var i in AmenatesArr) {
    AmenatesArr[i].eat();
    AmenatesArr[i].move();
    if (weather != "autumn" || weather != "winter") {
      AmenatesArr[i].mult();
    }
    AmenatesArr[i].die();
  }
  for (var i in AryucArr) {
    AryucArr[i].eat();
    AryucArr[i].eat2();
    AryucArr[i].move();
    AryucArr[i].mult();
    AryucArr[i].die();
  }
  io.sockets.emit("matrix", matrix)
}
setInterval(drawserverayin, 1000)
io.on("connection", function (socket) {
});

function changeweather() {
  if (weather == "winter") {
    weather = "spring"
  }
  else if (weather == "spring") {
    weather = "summer"
  }
  else if (weather == "summer") {
    weather = "autumn"
  }
  else if (weather == "autumn") {
    weather = "winter"
  }
  io.sockets.emit("weather", weather)
}
setInterval(changeweather, 3000)