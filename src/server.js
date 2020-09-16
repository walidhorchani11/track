const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    companies: [Company]!
    company(id_company: ID!): Company!
  }

  type Mutation {
    createCompany(data: CreateCompanyInput!): Company!
    updateCompany(id_company: ID!, data: UpdateCompanyInput!): Company!
    deleteCompany(id_company: ID!): Company!
  }

  type Company {
    id: ID!
    name: String!
    address: String
  }

  input CreateCompanyInput {
    name: String!
    address: String
  }

  input UpdateCompanyInput {
    name: String
    address: String
  }
`;

const resolvers = {
  Query: {
    company: (parent, args, ctx, info) => {
      return {
        name: 'Oyez',
        address: 'tunis',
      };
    },

    companies: (parent, args, ctx, info) => {
      return [
        { name: 'Oyez', address: 'tunis' },
        { name: 'Sofrecom', address: 'tunis' },
      ];
    },
  },

  Mutation: {
    createCompany: () => {
      return { name: 'Oyez', address: 'tunis' };
    },

    updateCompany: () => {
      return { name: 'Oyez', address: 'tunis' };
    },

    deleteCompany: () => {
      return { name: 'Oyez', address: 'tunis' };
    },
  },
};
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('Server is running on localhost:4000'));
