
export class Person{
    // public name: string;
    // private address: string;

    constructor(
        public firstName: string,
        public secondName: string,
        private address: string = 'No address'){
 
    } 
}

// export class Hero extends Person{

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){

//         super(realName, 'Sm');
//     }
// }
export class Hero{

   
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){

        // this.person = new Person('Jeison', 'SM');
    }
}
const person1 = new Person('Jeison','Martinez' ,'SM');
const ironman = new Hero('Iroman', 45, 'Tony', person1);

console.log(ironman);