const companyProvider = require('../../database/providers/CompanyProvider');

module.exports = {
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
    createCompany: (_, args) => {
      const company = companyProvider.createCompany(args.data);
      return company;
    },

    updateCompany: () => {
      return { id: '1', name: 'Oyez', address: 'tunis' };
    },

    deleteCompany: () => {
      return { id: '1', name: 'Oyez', address: 'tunis' };
    },
  },
};
