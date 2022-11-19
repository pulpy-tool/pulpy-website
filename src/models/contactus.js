'use strict';
const sequelize = require('./server');
const { Sequelize, DataTypes } = require("sequelize");

const ContactUs = sequelize.define("contact_us", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fullname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    },
  },
  companyname: {
    type: DataTypes.STRING,
  },
  companysize: {
    type: DataTypes.STRING
  },
  whatsgoal: {
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING
  },
  mobile: {
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
});
const asss = require('./server');
module.exports = ContactUs;