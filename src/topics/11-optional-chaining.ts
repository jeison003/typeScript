
export interface Passenger{
    name:string;
    children?: string[];
    // children: string[];
    
}

const passenger1: Passenger={
    name: 'Jeison'

}

const passenger2: Passenger={
    name: 'Saith',
    children: ['yare', 'yuli']
}

const returnChildren = (passenger: Passenger): number =>{
// "!" si o si recibe un valor (no recibe un null) y "?" puede o no recibir un valor (recibir un null)
    // const howChildren = passenger.children?.length || 0; puede o no recibir un hijo
    if( !passenger.children) return 0;
    const howChildren = passenger.children!.length; //si recibira siempre un hijo y si no es 0


    console.log(passenger.name,howChildren);
    return howChildren;
}
returnChildren(passenger2);