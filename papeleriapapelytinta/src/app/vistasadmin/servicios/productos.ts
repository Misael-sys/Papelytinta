export class Productos {
    constructor(
        public nombre: string,
        public codigo: string,
        public unidades: number,
        public precio: number,
        public categoria: string,
        public proveedor: string,
        public marca: string,
        public estado: string,   
        public fecha: Date,
        public id?: number,
    ) { }

}
