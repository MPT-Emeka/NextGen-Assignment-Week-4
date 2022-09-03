class Shape {
    constructor(type){
        this.type = type;
    }
    getType() {
        return this.type;

    }
}

class Triangle extends Shape {
    constructor(type, a, b, c){
        super(type);
        this.a = a
        this.b = b
        this.c = c
        }
    getPerimeter(){
        return "perimeter of" + " " + this.type + " = " + this.a * this.b * this.c;
    }
}

const newShape = new Triangle("Triangle", 3, 6, 7)

console.log(newShape.getType())
console.log(newShape.getPerimeter());



// let object2 = new Triangle(2, 4, 5)
// console.log(object2.getPerimeter());