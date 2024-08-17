const craneType = require('../models/craneType');

class craneTypeRepository {
  async findAll() {
    return await craneType.findAll();
  }

  async findById(id) {
    return await craneType.findByPk(id);
  }

  async create(craneTypeData) {
    const newCraneType = await craneType.create({
      nombre: craneTypeData.nombre,
    });
    return newCraneType.id;
  }

  async update(craneTypeId, craneType) {
    const [updatedRows] = await craneType.update({
      nombre: craneType.nombre,
    }, {
      where: { id: craneTypeId },
    });
    return updatedRows;
  }

  async delete(craneTypeId) {
    const deletedRows = await craneType.destroy({
      where: { id: craneTypeId },
    });
    return deletedRows;
  }
}

module.exports = new craneTypeRepository();
