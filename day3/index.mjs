import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf-8');

const commands = input.match(/mul\(\d*,\d*\)/g);

let result = 0;

commands.forEach(command => {
  const args = getArguments(command);
  result += args[0] * args[1];
});

console.log(result);

/**
 * @param {string} command
 * @returns {[number, number]}
 */
function getArguments(command) {
  return command
    .slice(4)
    .slice(0, -1)
    .split(',')
    .map(arg => +arg);
}
