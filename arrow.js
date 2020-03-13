
const doubleIt = num => num * 2;
const manyparameter = (x, y, z) => x + y -z;
const nan = () => 10;

const domath = (x, y, z) =>{
    const sum = x + y ;
    const diff = x - z ;
    const multiply = y * z;
    const result = sum * multiply;
    return result;
}
const result = domath(7, 5, 3);
console.log(result);