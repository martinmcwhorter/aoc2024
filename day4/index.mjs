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
  if (char !== 'X') {
    return;
  }
  right(vIndex, hIndex);
  left(vIndex, hIndex);
  up(vIndex, hIndex);
  down(vIndex, hIndex);
  downRight(vIndex, hIndex);
  downLeft(vIndex, hIndex);
  upRight(vIndex, hIndex);
  upLeft(vIndex, hIndex);
}

/**
 *
 * @param {number} vIndex
 * @param {number} hIndex
 * @returns
 */
function right(vIndex, hIndex) {
  const row = grid[vIndex];

  // if (row.length > hIndex + 1) {
  //   return;
  // }

  if (
    row[hIndex + 1] === 'M' &&
    row[hIndex + 2] === 'A' &&
    row[hIndex + 3] === 'S'
  ) {
    count += 1;
  }
}

/**
 *
 * @param {number} vIndex
 * @param {number} hIndex
 * @returns
 */
function left(vIndex, hIndex) {
  const row = grid[vIndex];

  // if (hIndex < 2) {
  //   return;
  // }

  if (
    row[hIndex - 1] === 'M' &&
    row[hIndex - 2] === 'A' &&
    row[hIndex - 3] === 'S'
  ) {
    count += 1;
  }
}

/**
 * @param {number} vIndex
 * @param {number} hIndex
 * @returns
 */
function down(vIndex, hIndex) {
  const column = getColumn(hIndex);

  if (column.length < vIndex + 2) {
    return;
  }

  if (
    column[vIndex + 1] === 'M' &&
    column[vIndex + 2] === 'A' &&
    column[vIndex + 3] === 'S'
  ) {
    count += 1;
  }
}

/**
 * @param {number} vIndex
 * @param {number} hIndex
 * @returns
 */
function up(vIndex, hIndex) {
  const column = getColumn(hIndex);

  // if (vIndex < 2) {
  //   return;
  // }

  if (
    column[vIndex - 1] === 'M' &&
    column[vIndex - 2] === 'A' &&
    column[vIndex - 3] === 'S'
  ) {
    count += 1;
  }
}

/**
 * @param {number} vIndex
 * @param {number} hIndex
 * @returns
 */
function downRight(vIndex, hIndex) {
  if (vIndex + 3 >= grid.length
    || hIndex + 2 > grid[0].length) {
    return;
  }

  if (grid[vIndex + 1][hIndex + 1] === 'M' &&
    grid[vIndex + 2][hIndex + 2] === 'A' &&
    grid[vIndex + 3][hIndex + 3] === 'S'
  ) {
    count += 1;
  }
}

/**
 * @param {number} vIndex
 * @param {number} hIndex
 * @returns
 */
function downLeft(vIndex, hIndex) {
  if (
    vIndex + 3 >= grid.length
  ) {
    return;
  }
  if (
    grid[vIndex + 1][hIndex - 1] === 'M' &&
    grid[vIndex + 2][hIndex - 2] === 'A' &&
    grid[vIndex + 3][hIndex - 3] === 'S'
  ) {
    count += 1;
  }
}

/**
 * @param {number} vIndex
 * @param {number} hIndex
 * @returns
 */
function upRight(vIndex, hIndex) {
  if (vIndex <= 2
    || hIndex + 2 >= grid[0].length) {
    return;
  }

  if (grid[vIndex - 1][hIndex + 1] === 'M' &&
    grid[vIndex - 2][hIndex + 2] === 'A' &&
    grid[vIndex - 3][hIndex + 3] === 'S'
  ) {
    count += 1;

  }
}

/**
 * @param {number} vIndex
 * @param {number} hIndex
 * @returns
 */
function upLeft(vIndex, hIndex) {
  if (vIndex <= 2
    // || hIndex <= 2
  ) {
    return;
  }

  if (grid[vIndex - 1][hIndex - 1] === 'M' &&
    grid[vIndex - 2][hIndex - 2] === 'A' &&
    grid[vIndex - 3][hIndex - 3] === 'S'
  ) {
    count += 1;
  }
}

/**
 *
 * @param {number} hIndex
 * @returns {string[]}
 */
function getColumn(hIndex) {
  return grid.flatMap(row => row[hIndex]);
}
