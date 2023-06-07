
function addNumbers(a: number, b: number):number{
    return a + b;
}

const result: number = addNumbers(1,5);

//Funciones flechas o lambas
const addNumbersArrow = (a: number, b:number):string =>{
    return `${a+b}` ;
}
const result2: string = addNumbersArrow(1,5);
//Primer parametro obligatorio, segundo opcional y el tercero opcional pero con valor por defecto
function multiply (firstName: number, secondName?: number, base: number = 2):number{
    return firstName * base;
}

const result3: number= multiply(5);
console.log({result, result2, result3});
console.log("----------------------------");

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCaracter = (character: Character, amount: number)=>{

    character.hp += amount;

}
const pj: Character = {
    name: 'Peleao',
    hp: 50,
    showHp (){
        console.log(`Puntos de vida ${this.hp}`)
    }
}
healCaracter(pj, 20);

pj.showHp();
export{};