const proveedoresResolver = {

    Query: {
        proveedorByID: (_, { userId, proveedorID }, { dataSources, userIdToken }) => {        //Preguntar la razon para juntar en la llave { dataSources, userIdToken } estos dos elementos      
            if(userId == userIdToken) //Preguntar por esta comparacion, se compara el Int del userId con un Token? 
                return dataSources.proveedores.getByID(proveedorID);
            else
                return null;
        }
    },
}

module.exports = proveedoresResolver;