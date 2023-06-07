const skills: string[] = ['Bash', 'Counter', 'Healing'];


interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //! el signo "?" hace referencia a que puede estar o no definido (es opcional)
}
//* esto es un objeto y queremos definir sus atributos gracias a la interface, donde alli lo definiremo
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: 'Bogota'

}

console.table(strider);
export{};