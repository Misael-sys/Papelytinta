export class Users {
    public nombre: string;
        public apellido: string;
        public email: string;
        public password: string;
        public id: number;
    
    constructor(Id:number,ape:string, name: string,pwd:string,email:string) {
    this.id = Id;
    this.nombre = name;
    this.apellido = ape;
    this.password = pwd;
    this.email = email;
    }


    }