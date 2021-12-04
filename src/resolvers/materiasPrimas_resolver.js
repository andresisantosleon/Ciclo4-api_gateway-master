const materiasPrimasResolver = {

    Query: {
        getAllMateriasPrimas: (_, { userId }, { dataSources, userIdToken }) => {        //Preguntar la razon para juntar en la llave { dataSources, userIdToken } estos dos elementos      
            if(userId == userIdToken) //Preguntar por esta comparacion, se compara el Int del userId con un Token? 
                return dataSources.materiasPrimas.getAllMP();
            else
                return null;
        }
    },
}

module.exports = materiasPrimasResolver;