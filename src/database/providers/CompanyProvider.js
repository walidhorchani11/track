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

exports.getCompany = async (id) => {
  try {
    const company = await Company.findById(id);

    return company;
  } catch (error) {
    console.log('getOne company error:', error);
    throw new Error('error on getOne company :', error);
  }
};

exports.getCompanies = async () => {
  try {
    const companies = await Company.find();

    return companies;
  } catch (error) {
    console.log('getAll companies error:', error);
    throw new Error('error on getAll companies :', error);
  }
};
