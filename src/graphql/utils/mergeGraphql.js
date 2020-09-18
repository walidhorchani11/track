const path = require('path');

const {
  fileLoader,
  mergeTypes,
  mergeResolvers,
} = require('merge-graphql-schemas');

exports.mergeTypes = () => {
  const typesArray = fileLoader(path.join(__dirname, '../types'));
  return mergeTypes(typesArray, { all: true });
};

exports.mergeResolvers = () => {
  const resolversArray = fileLoader(path.join(__dirname, '../resolvers'));
  return mergeResolvers(resolversArray);
};
