const { GraphQLServer } = require('graphql-yoga');

require('dotenv').config();

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const { connect } = require('./database/utils');

//database mongodb connection
connect();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
  },
});

server.start(() => console.log('Server is running on localhost:4000'));
