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

const list = [0];

list1.forEach((value, index) => {
  list.push([value, list2[index]]);
})

const result = list.reduce((prev, current) => {
  const result =  Math.abs(current[0] - current[1]) + prev;
  return result;
});

console.log(result);
