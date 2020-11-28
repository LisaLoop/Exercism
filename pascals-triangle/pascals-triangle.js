//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/*
Compute Pascal's triangle up to a given number of rows.

In Pascal's Triangle each number is computed by adding the numbers to
the right and left of the current position in the previous row.

```text
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1

# ... etc


*/

export const rows = (rows) => {
  if(rows === 0){return []}
  if(rows === 1){return [[1]]}
  if(rows === 2){return [[1],[1,1]]}
  let x = [];
  x.push([1])
  x.push([1,1])
  // For all rows 
  for(let r=2; r<rows; r++){
    // Add the first element 
    let newRow = [];
    newRow.push(1)
    // For all elements of the previous row except for the last one
    // add the element + next element
    for(let i=0; i<x[r-1].length-1; i++){
      let currentElement =x[r-1][i];
      let nextElement =  x[r-1][i+1];
      newRow.push(currentElement + nextElement)
  
    }
    // Finally, add the last element
    newRow.push(1);
    x.push(newRow);
  }

  // for(let i in x){console.log(x[i])}
  return x;

};
