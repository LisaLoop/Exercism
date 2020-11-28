//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//  

export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }
/*
  {maxFactor: number, minFactor: number, sum: number}  
  {maxFactor: 5, minFactor: 0, sum: 12} 
  -> 3 ** 2 + 4 ** 2 = 5 ** 2 -> 9 + 16 === 25
  -> 3 + 4 + 5 = 12 
*/
  static where(params) {
    let results = [];
    let minFactor = params.minFactor || 1;
    if("maxFactor" in params ){
      for(let i=minFactor; i<=params.maxFactor; i++){
        for(let j=i+1; j<=params.maxFactor; j++){
          for(let k=j+1; k<=params.maxFactor; k++){
            let triplet = new Triplet(i, j, k);
            if(triplet.isPythagorean()){
                if("sum" in params){
                  if(triplet.sum() !== params.sum){
                    continue;
                  }
                }
                results.push(triplet);
              
            }
          }
        }
      }
      console.log("results: ", results);
      return results;
    }
  }
}
