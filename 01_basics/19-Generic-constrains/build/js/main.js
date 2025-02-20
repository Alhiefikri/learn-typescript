"use strict";
// generic constraint
const user1 = {
    name: "budiman",
    age: 22,
};
function logLength(item) {
    console.log(item.length);
}
logLength("Hello");
logLength([1, 2, 3, 4]);
// logLength<number>(23);
