/*
The program will take color names as input and output a two digit number,
even if the input is more than two colors!

The colors are mapped to the numbers from 0 to 9 in the sequence:
Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White

From the example above: brown-green should return 15
brown-green-violet should return 15 too, ignoring the third color.
*/
const colorMap = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
};
// e = n * 10^p
// 1e2
// n = 2;
// 10^0 = 1
// 10^1 = 10
// 20
/// 1    1  1
//  100  10 1 
export const decodedValue = (colors) => {
  const color1 = colors[0];
  const color2 = colors[1];
  
  if(color1 in colorMap && color2 in colorMap){
    // return parseInt(`${colorMap[color1]}${colorMap[color2]}`,10)
    return colorMap[color1] * 10 + colorMap[color2]

  }
  return 'not found'
};

// console.log(decodedValue(["red", "yellow"])) // 24
// console.log(decodedValue(["red", "yellow", "black"])) // 24
// console.log(decodedValue(["black", "black", "black"])) // 00


