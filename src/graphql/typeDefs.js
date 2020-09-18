const { mergeTypes } = require('./utils/mergeGraphql');

const typeDefs = mergeTypes();

module.exports = typeDefs;
