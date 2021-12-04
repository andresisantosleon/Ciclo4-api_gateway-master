const { ApolloServer } = require('apollo-server'); //Preguntar como se hace Debug localmente

const authentication = require('./utils/authentication');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AccountAPI = require('./dataSources/account_api');
const AuthAPI = require('./dataSources/auth_api');
const MateriasPrimas=require('./dataSources/materiasPrimas_api');

const server = new ApolloServer({

    context : authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        accountAPI: new AccountAPI(),
        authAPI: new AuthAPI(),
        materiasPrimas: new MateriasPrimas(),
    }),    
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000)
.then( ( { url }) => {
    console.log(`Servidor está corriendo en ${url}`);
})