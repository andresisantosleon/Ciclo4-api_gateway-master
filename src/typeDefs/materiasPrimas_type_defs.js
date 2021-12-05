const { gql } = require('apollo-server');

const materiasPrimasTypeDefs = gql`

    input materiasPrimasI {
    materiaPrima_codigo: Int!
    materiaPrima_categoria_id: String!
    materiaPrima_descripcion: String!
    materiaPrima_existencias: Float!
    materiaPrima_unidad: String!
    proveedoresId: [Int]!       
    }

    type materiasPrimasO {
    materiaPrima_codigo: Int!
    materiaPrima_categoria_id: String!
    materiaPrima_descripcion: String!
    materiaPrima_existencias: Float!
    materiaPrima_unidad: String!
    proveedoresId: [Int]!       
    }

    extend type Query {
        getAllMateriasPrimas(userId: Int!): [materiasPrimasO]
    }

    extend type Mutation {
        crearMateriaPrima(userId: Int!, materiaPrima: materiasPrimasI!): String!
    }
`;

module.exports = materiasPrimasTypeDefs;