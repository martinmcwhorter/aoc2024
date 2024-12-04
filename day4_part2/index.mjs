import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf-8');

/** @type {string[][]} */
const grid = input.split('\n').map(x => x.split(''));

let count = 0;

grid.forEach((vertical, vIndex) =>
  vertical.forEach((horizontal, hIndex) => process(horizontal, vIndex, hIndex))
);

console.log(count);

/**
 *
 * @param {string} char
 * @param {number} vIndex
 * @param {number} hIndex
 * @returns
 */
function process(char, vIndex, hIndex) {
  if (char !== 'A') {
    return;
  }

  if (vIndex === 0 || vIndex === grid.length - 1) {
    return;
  }

  if (hIndex === 0 || hIndex === grid[0].length - 1) {
    return;
  }
  const left = [...grid[vIndex - 1][hIndex - 1], grid[vIndex + 1][hIndex + 1]];
  const right = [...grid[vIndex - 1][hIndex + 1], grid[vIndex + 1][hIndex - 1]];
  if (
    (
      left.includes('M') &&
      left.includes('S') &&
      right.includes('M') &&
      right.includes('S')
    )

  ) {
    count += 1;
  }

}
