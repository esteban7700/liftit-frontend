
export type Vehicle = {
    placa: string,
    marca: string,
    tipo: string,
    owner: Owner
};

export type Owner = {
    cedula: string;
    nombre: string;
    vehicles: Vehicle[];
};

export type Owners = {
    owners: Owner[];
};

export type Brand = {
    nombre: string;
    cantidad: string
};

export type Brands = {
    brands: Brand[];
};
