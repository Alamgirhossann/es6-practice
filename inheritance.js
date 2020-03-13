class Parent{
    constructor(){
        this.fatherName = "Shaikh"
    }
}

class Child extends Parent{
    constructor(cName){
        super();
        this.name = cName;
       
    }
    fullName(){
        return this.name + " " + this.fatherName;
    }
}

const child1 = new Child("Alamgir");
const child2 = new Child("Shamima");
console.log(child1.fullName()); 
console.log(child2.fullName());