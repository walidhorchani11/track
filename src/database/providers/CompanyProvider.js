const Company = require('../models/Company');

exports.createCompany = async (data) => {
  try {
    const company = await Company.create(data);
    return company;
  } catch (error) {
    console.log('create company error:', error);
    throw new Error('error on create company :', error);
  }
};
