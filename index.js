import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor();

const colorName = argv[2];
const luminosity = argv[3];
let userColor = randomColor({
  luminosity: luminosity,
  hue: colorName,
});

const changeColor = chalk.hex(userColor);

if (colorName) {
  userColor = randomColor({
    luminosity: luminosity,
    hue: colorName,
  });
} else {
  color = randomColor();
}

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
