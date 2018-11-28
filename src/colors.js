
import tinycolor from 'tinycolor2';

const primary = '#1789FC';
const secondary = 'grey';

const colors = {
  primary,
  secondary,
};


export const defaultDotsColors = [
  tinycolor(primary).lighten(5).toString(),
  tinycolor(primary).lighten(30).toString(),
  tinycolor(primary).lighten(5).toString(),
  tinycolor(primary).lighten(30).toString(),
  tinycolor(primary).lighten(5).toString(),
  tinycolor(primary).lighten(30).toString(),
];


export default colors;
