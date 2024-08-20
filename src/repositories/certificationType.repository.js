const certificationType = require('../models/certificationType');

class certificationTypeRepository {
  async findAll() {
    return await certificationType.findAll();
  }

  async findById(id) {
    return await certificationType.findByPk(id);
  }

  async create(certificationTypeData) {
    const newCertificationType = await certificationType.create(certificationTypeData);
    return newCertificationType.id;
  }

  async update(certificationTypeId, certificationTypeData) {
    const [updatedRows] = await certificationType.update(certificationTypeData, {
      where: { id: certificationTypeId },
    });
    return updatedRows;
  }

  async delete(certificationTypeId) {
    const deletedRows = await certificationType.destroy({
      where: { id: certificationTypeId },
    });
    return deletedRows;
  }
}

module.exports = new certificationTypeRepository();
