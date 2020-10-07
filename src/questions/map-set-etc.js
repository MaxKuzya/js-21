const obj = new Object();
const map = new Map();

const set = new Set();

set.add("apple");
set.add("banana");

set.add("apple");
set.add("apple");

obj.property = "test assignment";
map.set("property", "test assignment");

map.set(function example() {}, "test assignment");

console.log(obj);
console.log(map);
console.log(set);

for (let i = 0; i < 1000000; i += 1) {
  set.add(new Object());
}
