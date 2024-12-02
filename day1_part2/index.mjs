import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf-8");

const list1 = [];
const list2 = [];

input.split("\n").filter(id => id).forEach((row) => {
  const [item1, item2] = row.split("   ");
  list1.push(item1);
  list2.push(item2);
});
list1.sort();
list2.sort();

let accumulator = 0;

list1.forEach(value => {
  const count = list2.filter(item => item === value).length;
  accumulator += value * count; 
})



console.log(accumulator);
