import gql from 'graphql-tag';

export const queryOwners = gql`
{
    owners{
        cedula
        nombre
        vehicles{
            placa
            marca
            tipo
        }
    }
}
`;
export const queryBrands = gql`
{
    brands{
        nombre
        cantidad
    }
}
`;

export const mutationOwner = gql`
mutation addOwner($cedula: ID, $nombre: String) {
    addOwner(cedula: $cedula, nombre: $nombre) {
        cedula
        nombre
    }
}
`;

export const mutationVehicle = gql`
mutation addVehicle($placa: ID, $marca: String, $tipo: String, $ownerid: String) {
    addVehicle(placa: $placa, marca: $marca, tipo: $tipo, ownerid: $ownerid) {
        placa
    }
}
`;

export const mutationVehicleAndOwner = gql`
mutation addVehicleAndOwner($placa: ID, $marca: String, $tipo: String, $cedula: ID, $nombre: String) {
    addVehicleAndOwner(placa: $placa, marca: $marca, tipo: $tipo, ownerinput: {nombre: $nombre, cedula: $cedula}) {
        placa
    }
}
`;

