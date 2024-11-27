export interface Proveedor {
    proveedorID: number;
    nombreProveedor: string;
    razonSocial: string;
    estado: string;
    municipio: string;
    celular: string;
}

export interface Proveedores {
    estatus: boolean;
    mensaje: string;
    data: Proveedor[];
    totalRegistros: number;
    numeroPagina: number;
    registrosPorPagina: number;
}

export interface ProveedorPorID {
    estatus: boolean;
    mensaje: string;
    data: Proveedor;
}