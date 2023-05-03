// const course:string = "Next level development"
// console.log(course);

// const multipaleNum = (num3:number, num4:number):string => {
//     const result = num3*num4;
//     return `result = ${result}`;
// } 

// console.log(multipaleNum(3, 2));



// carry funtion
function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }

  const addTwo = generateAdder(2);

  console.log(addTwo(3));
  
  console.log(addTwo(5));