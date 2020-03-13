class student {
    constructor(sId, sName, sFatherName, sMotherName, sPhone){
        this. Id = sId;
        this. Name = sName;
        this. FatherName= sFatherName;
        this. sMotherName = sMotherName;
        this. Phone =sPhone;
        this. Standard = 7;
        this. section = "A"
        this. school = "govt school";
    }
}

const student1 = new student(12, "alamgir", "abul Kalam", "aleya", 5555);
const student2 = new student(10, "rubel", 6666);
console.log(student1, student2);