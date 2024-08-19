const Operator = require('../models/operators');

class OperatorRepository {
  async create(operatorData) {
    return await Operator.create(operatorData);
  }

  async findById(operatorId) {
    return await Operator.findByPk(operatorId);
  }
}

module.exports = new OperatorRepository();