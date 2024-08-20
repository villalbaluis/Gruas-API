const maintenanceType = require('../models/maintenanceType');

class maintenanceTypeRepository {
  async findAll() {
    return await maintenanceType.findAll();
  }

  async findById(id) {
    return await maintenanceType.findByPk(id);
  }

  async create(maintenanceTypeData) {
    const newMaintenanceType = await maintenanceType.create(maintenanceTypeData);
    return newMaintenanceType.id;
  }

  async update(maintenanceTypeId, maintenanceTypeData) {
    const [updatedRows] = await maintenanceType.update(maintenanceTypeData, {
      where: { id: maintenanceTypeId },
    });
    return updatedRows;
  }

  async delete(maintenanceTypeId) {
    const deletedRows = await maintenanceType.destroy({
      where: { id: maintenanceTypeId },
    });
    return deletedRows;
  }
}

module.exports = new maintenanceTypeRepository();
