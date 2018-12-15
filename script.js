var side = 50
var socket = io();
var m = 20;
var n = 30;
function setup() {
  frameRate(5);
  //createCanvas(matrix[0].length * side, matrix.length * side);
  createCanvas(m * side, n *  side);
  background('#acacac');
}
function drawmatrix(matrix) {
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

}

socket.on("matrix", drawmatrix);

