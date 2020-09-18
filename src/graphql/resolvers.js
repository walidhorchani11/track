const { mergeResolvers } = require('./utils/mergeGraphql');

const resolvers = mergeResolvers();

module.exports = resolvers;
