module.exports = {
  Query: {
    equipments: () => {
      return [{ id: '1', name: 'equip1' }];
    },
    equipment: () => {
      return { id: '1', name: 'equip1' };
    },
  },
};
