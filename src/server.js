const { GraphQLServer } = require('graphql-yoga');

require('dotenv').config();

const { connect } = require('./database/utils');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
//database mongodb connection
connect();

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log('Server is running on localhost:4000'));
