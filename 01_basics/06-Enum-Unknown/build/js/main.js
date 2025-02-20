"use strict";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 6] = "Up";
    Direction[Direction["Down"] = 7] = "Down";
    Direction[Direction["Left"] = 8] = "Left";
    Direction[Direction["Right"] = 9] = "Right";
})(Direction || (Direction = {}));
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "Atas";
    DirectionString["Down"] = "Bawah";
    DirectionString["Left"] = "Kiri";
    DirectionString["Right"] = "Bawah";
})(DirectionString || (DirectionString = {}));
let move = 6 /* Arah.Atas */;
// console.log(move);
// Unknown Type
let data;
data = "hello ";
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
else {
    console.log("data is not a string");
}
