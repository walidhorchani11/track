const path = require('path');

const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

/**
 * @param {string} source Source should be 'types' folder or 'resolvers' folder
 */
exports.merge = (source) => {
  if (source.includes('types')) {
    console.log('source includes types');
    const typesArray = fileLoader(path.join(__dirname, '../types'));
    return mergeTypes(typesArray, { all: true });
  } else if (source.includes('resolvers')) {
    console.log('source includes resolvers');
    const resolversArray = fileLoader(path.join(__dirname, '../resolvers'));
    return mergeResolvers(resolversArray);
  } else {
    console.log('verifier le source');
    throw new Error('check source ...');
  }
};
