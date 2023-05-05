class CommonArea{
    calculateArea():number{
        return 0;
    }
}

class CircleArea extends CommonArea{
    constructor(public r:number){
        super()
    }
    calculateArea(): number {
        const area = Math.PI*(this.r*this.r);
        return area;
    }
}

class RectangulerArea extends CommonArea{
    constructor(public height:number, public weight:number){
        super()
    }
    calculateArea(): number {
        const area = this.height * this.weight;
        return area;
    }
}

// call class using function 
function getResultOfArea(param:CommonArea): void{
    console.log(param.calculateArea());
}
getResultOfArea(new CircleArea(2));
getResultOfArea(new RectangulerArea(2, 3));

// call class directly 
const resultOfCircleArea = new CircleArea(4);
console.log(resultOfCircleArea.calculateArea());
const resultOfRectangulerArea = new RectangulerArea(4, 6);
console.log(resultOfRectangulerArea.calculateArea());

class OperatorCalculation{
    calculate(param1:number, param2:number): void{
        
    }
}

class Addition extends OperatorCalculation{
    calculate(param1: number, param2: number): string {
        return `Addition result : ${param1 + param2}`;
    }
}

class Substraction extends OperatorCalculation{
    calculate(param1: number, param2: number): string {
        return `Substraction result : ${param1 - param2}`;
    }
}

class Multiplication extends OperatorCalculation{
    calculate(param1: number, param2: number): string {
        return `Multiplication result : ${param1 * param2}`;
    }
}
class Division extends OperatorCalculation{
    calculate(param1: number, param2: number): string {
        return `Division result : ${param1 / param2}`;
    }
}

const getResultOfOperatorCalculation = (param:OperatorCalculation): void => {
    console.log(param.calculate(2, 3));
}

getResultOfOperatorCalculation(new Addition())
getResultOfOperatorCalculation(new Substraction())
getResultOfOperatorCalculation(new Multiplication())
getResultOfOperatorCalculation(new Division())