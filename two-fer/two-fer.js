//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/** 
 * Name	String to return
Alice	One for Alice, one for me.
Bob	One for Bob, one for me.
One for you, one for me.
Zaphod	One for Zaphod, one for me.
Setup
*/

export const twoFer = (name='') => {
  if(name === ''){return "One for you, one for me."}
  return `One for ${name}, one for me.`
};
