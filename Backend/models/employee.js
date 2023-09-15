module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: Sequelize.STRING,
    },
    cityname: {
      type: Sequelize.STRING,
    },
  });

  return Employee;
};
