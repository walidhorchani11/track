const Query = {
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
};

module.exports = Query;
