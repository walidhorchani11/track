const { Schema, model } = require('mongoose');

const CompanySchema = new Schema({
  name: { type: String, required: true },
  address: String,
  createdAt: { type: Date, default: new Date() },
});

const Company = model('Company', CompanySchema);

module.exports = Company;
