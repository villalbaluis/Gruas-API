const operativeStatus = require('../models/operativeStatus');

class operativeStatusRepository {
  async findAll() {
    return await operativeStatus.findAll();
  }

  async findById(id) {
    return await operativeStatus.findByPk(id);
  }

  async create(operativeStatusData) {
    const newOperativeStatus = await operativeStatus.create({
      nombre: operativeStatusData.nombre,
    });
    return newOperativeStatus.id;
  }

  async update(operativeStatusId, operativeStatusData) {
    const [updatedRows] = await operativeStatus.update({
      nombre: operativeStatusData.nombre,
    }, {
      where: { id: operativeStatusId },
    });
    return updatedRows;
  }

  async delete(operativeStatusId) {
    const deletedRows = await operativeStatus.destroy({
      where: { id: operativeStatusId },
    });
    return deletedRows;
  }
}

module.exports = new operativeStatusRepository();
