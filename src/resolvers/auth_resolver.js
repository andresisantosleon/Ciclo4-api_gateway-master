const authResolver = {

    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {        //Preguntar la razon para juntar en la llave { dataSources, userIdToken } estos dos elementos      
            if(userId == userIdToken) //Preguntar por esta comparacion, se compara el Int del userId con un Token? 
                return dataSources.authAPI.getUser(userId);
            else
                return null;
        }
    },

    Mutation: { //Preguntar la diferencia entre una Mutation y una Query, cuando se usa cada una?

        signUpUser: async (_, { userInput }, { dataSources }) => { //Preguntar por el primer argumento vacio
            //Preguntar el por que del uso del async await en la mutation, la mutation no se ejecutan en seri?
            const accountInput = {
                username: userInput.username,
                balance: userInput.balance,
                lastChange: (new Date()).toISOString()
            }

            await dataSources.accountAPI.createAccount(accountInput);

            const authInput = {
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                email: userInput.email
            }

            return await dataSources.authAPI.createUser(authInput);
        },

        logIn: (_, { credentials }, { dataSources }) => {            
            return dataSources.authAPI.authRequest(credentials);
        },

        refreshToken: (_, { token }, { dataSources }) => {            
            return dataSources.authAPI.refreshToken(token);
        },

    }
}

module.exports = authResolver;