const crane = require('../models/cranes');

class CraneRepository {
  async findAll() {
    return await crane.findAll();
  }

  async findById(id) {
    return await crane.findByPk(id);
  }

  async create(craneData) {
    const newCrane = await crane.create(craneData);
    return newCrane.gru_id;
  }

  async update(craneId, craneData) {
    const [updatedRows] = await crane.update(craneData, {
      where: { gru_id: craneId },
    });
    return updatedRows;
  }

  async delete(craneId) {
    const deletedRows = await crane.destroy({
      where: { gru_id: craneId },
    });
    return deletedRows;
  }
}

module.exports = new CraneRepository();
