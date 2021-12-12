const { ApolloError } = require('apollo-server-errors');
const materiasPrimasResolver = {

    Query: {
        getAllMateriasPrimas: (_, { userId }, { dataSources, userIdToken }) => {        //Preguntar la razon para juntar en la llave { dataSources, userIdToken } estos dos elementos      
            if(userId == userIdToken) //Preguntar por esta comparacion, se compara el Int del userId con un Token? 
                return dataSources.materiasPrimas.getAllMP();
            else
                return null;
        }
    },

    // Query: {
    //     getAllMateriasPrimas: (_, { userId }, { dataSources}) => {        //Preguntar la razon para 
    //             return dataSources.materiasPrimas.getAllMP();           
    //     }
    // },

    Mutation:{
        crearMateriaPrima: async (_, {userId, materiaPrima}, { dataSources, userIdToken })=>{
            if(userIdToken==userId){

            for(var e in materiaPrima.proveedoresId){ //Ciclo para validar si el proveedor existe, falta evitar validacion cuando la lista de ids de proveedor este vacia
                console.log(e)
                var id =materiaPrima.proveedoresId[e]
                var proveedorCiclo = await dataSources.proveedores.getByID(id)
                console.log(proveedorCiclo)

                var contador=0
            Object.entries(proveedorCiclo).forEach(function ([key, value]){
                if(value==='' || value===null)
                {
                    contador++;
                    console.log(contador);
                }
            })

            if(contador===Object.keys(proveedorCiclo).length)
            {
                throw new ApolloError(`Error de proveedor con id ${id} no se encontro: ${500}`, 500);
            }

            }            
            }
            else
            {
                return null;
            }
            return await dataSources.materiasPrimas.createMP(materiaPrima)
        }

    }
}

module.exports = materiasPrimasResolver;