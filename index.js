import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor();

const colorName = argv[2];
const luminosity = argv[3];
const userColor = randomColor({
  luminosity: luminosity,
  hue: colorName,
});

const changeColor = chalk.hex(userColor);

console.log(
  changeColor(`###############################
###############################
###############################
######                   ######
######      ${color}      ######
######                   ######
###############################
###############################
###############################`),
);
