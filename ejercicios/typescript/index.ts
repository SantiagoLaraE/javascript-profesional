//Funciones

function add (a:number, b:number):number{
    return a+b;
}


const sum = add(6,4);

// console.log(sum)


function createAdder(a:number):(number)=> number{
    return function(b:number){
        return a + b;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

console.log(fourPlus6);

function fullName(firstName:string, lastName?: string):string {
    return `${firstName} ${lastName}`;
}

const person1 = fullName('Santiago');
console.log(person1);