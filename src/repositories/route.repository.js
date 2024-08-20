const routesModel = require('../models/routes');

class routesModelRepository {
  async findAll() {
    return await routesModel.findAll();
  }

  async findById(id) {
    return await routesModel.findByPk(id);
  }

  async create(routeData) {
    const newRoutesModel = await routesModel.create(routeData);
    return newRoutesModel.id;
  }

  async update(routeId, routeData) {
    const [updatedRows] = await routesModel.update(routeData, {
      where: { id: routeId },
    });
    return updatedRows;
  }

  async delete(routeId) {
    const deletedRows = await routesModel.destroy({
      where: { id: routeId },
    });
    return deletedRows;
  }
}

module.exports = new routesModelRepository();
