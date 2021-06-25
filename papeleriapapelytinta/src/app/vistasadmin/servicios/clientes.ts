export class Cliente {
    constructor(
        public nombre: string,
        public apellido: string,
        public telefono: string,
        public correo: string,
        public direccion: string,
        public id?: number,
    ) { }

}
