//<T> da a entender que es el primer generico, el resto es la letra que quieras, <> simbolo del generico
export function whatsMyType<T>(argument: T):T {

    return argument;
}
const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<number>(200);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString);
console.log(amINumber);
console.log(amIArray);