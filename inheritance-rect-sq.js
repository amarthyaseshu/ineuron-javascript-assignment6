//Inheritance Rectangle, Square

class Rectangle{
constructor(length,breadth){
    this.length=length;
    this.breadth=breadth;
}
   area(){
    return this.length*this.breadth;
   }
}

class Square extends Rectangle{
    constructor(length,breadth){
        super(length,breadth);
    }
}

//Output

let squareObj=new Square(10,20);
console.log("Area of square "+squareObj.area());
