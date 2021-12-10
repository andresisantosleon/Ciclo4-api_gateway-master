const lodash = require('lodash');


const authResolver = require('./auth_resolver');


const materiasPrimasResolver= require('./materiasPrimas_resolver')

const proveedoresResolver=require('./proveedores_resolver')

const resolvers = lodash.merge(authResolver, materiasPrimasResolver, proveedoresResolver);

module.exports = resolvers;