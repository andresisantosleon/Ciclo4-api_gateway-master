const { gql } = require('apollo-server');

const materiasPrimasTypeDefs = gql`

    type materiasPrimas {
    materiaPrima_codigo: Int!
    materiaPrima_categoria_id: String!
    materiaPrima_descripcion: String!
    materiaPrima_existencias: Float!
    materiaPrima_unidad: String!
    proveedoresId: [Int]!       
    }

    extend type Query {
        getAllMateriasPrimas(userId: Int!): [materiasPrimas]
    }
`;

module.exports = materiasPrimasTypeDefs;