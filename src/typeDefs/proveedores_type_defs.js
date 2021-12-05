const { gql } = require('apollo-server');

const proveedoresTypeDefs = gql`

    type proveedor {
    proveedorId: Int!
    proveedor_Name: String!
    proveedor_Telefono: Int!
    proveedor_Direccion: String!
    proveedor_Email: String!
    proveedor_Nit: String!        
    }

    extend type Query {
        proveedorByID(userId: Int!, proveedorID: Int!): proveedor
    }
`;

module.exports = proveedoresTypeDefs;