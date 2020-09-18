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
    createCompany: () => {
      return { id: '1', name: 'Oyez', address: 'tunis' };
    },

    updateCompany: () => {
      return { id: '1', name: 'Oyez', address: 'tunis' };
    },

    deleteCompany: () => {
      return { id: '1', name: 'Oyez', address: 'tunis' };
    },
  },
};
