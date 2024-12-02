import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf-8');

const records = input
  .split('\n')
  .filter((id) => id)
  .map((row) => row.split(' ').map((x) => +x));

let safe = 0;

records.forEach((plant) => {
  if (allIncreaseOrDecrease(plant) && smallChange(plant)) {
    safe += 1;
  }
});

console.log(safe);

/**
 *
 * @param {number[]} array
 */
function allIncreaseOrDecrease(array) {
  const sorted = array.toSorted((a, b) => a - b);
  return (
    JSON.stringify(array) === JSON.stringify(sorted) ||
    JSON.stringify(array) === JSON.stringify(sorted.toReversed())
  );
}

/**
 *
 * @param {number[]} array
 */
function smallChange(array) {
  let result = true;

  array.forEach((value, index) => {
    if (index === 0) {
      return;
    }

    if (value === array[index - 1]) {
      result = false;
    }

    if (Math.abs(value - array[index - 1]) > 3) {
      result = false;
    }
  });

  return result;
}
