export class Proveedores {
    constructor(
        public dni: string,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public direccion: string,
        public telefono: string,
        public id?: number,
    ) { }

}
