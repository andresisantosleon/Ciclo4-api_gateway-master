const lodash = require('lodash');

const accountResolver = require('./account_resolver');
const authResolver = require('./auth_resolver');
const transactionResolver = require('./transaction_resolver');

const materiasPrimasResolver= require('./materiasPrimas_resolver')

const resolvers = lodash.merge(accountResolver, transactionResolver, authResolver, materiasPrimasResolver);

module.exports = resolvers;