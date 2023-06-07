
interface AudioPlayer{
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;   
}

const audioPlayer: AudioPlayer ={
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author: 'Ed Sheeran',
        year: 2015
    }
}
const song = 'New Song';
// tomo la variable "song" de la propia interfaz  y la saco y la destructuro con un nuevo nombre
const {song:anotherSong,songDuration: duration} = audioPlayer;
const {details} = audioPlayer;//asi saco de audio player detalles
const {author} = details; //y asi destructuro de details author

console.log('Song: ',song, 'anotherSong: ',anotherSong);
console.log('Duration: ',duration);
console.log('Author: ',author);

const [, , p3 = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3: ', p3)

export{};