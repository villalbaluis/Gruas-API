const craneRepository = require('../repositories/crane.repository');
const operativeStatusRepository = require('../repositories/operativeStatus.repository');
const craneTypeRepository = require('../repositories/craneType.repository');

class craneUseCase {
  async getAllCranes() {
    return await craneRepository.findAll();
  }

  async getCraneById(id) {
    return await craneRepository.findById(id);
  }

  async createCrane(craneData) {
    const operativeStatus = await operativeStatusRepository.findById(craneData.estado_operativo_id);
    const craneType = await craneTypeRepository.findById(craneData.tipo_grua_id);

    if (!operativeStatus || !craneType) {
      throw new Error('Estado operativo, o tipo de grúa no válidos');
    }

    return await craneRepository.create({
      numero_serie: craneData.numero_serie,
      modelo: craneData.modelo,
      capacidad_carga: craneData.capacidad_carga,
      anio_fabricacion: craneData.anio_fabricacion,
      estado_operativo_id: craneData.estado_operativo_id,
      tipo_grua_id: craneData.tipo_grua_id,
    });
  }

  async updateCrane(id, craneData) {
    const {
      numero_serie,
      modelo,
      capacidad_carga,
      anio_fabricacion,
      estado_operativo_id,
      tipo_grua_id,
    } = craneData;
  
    const [operativeStatus, craneType] = await Promise.all([
      estado_operativo_id ? operativeStatusRepository.findById(estado_operativo_id) : null,
      tipo_grua_id ? craneTypeRepository.findById(tipo_grua_id) : null,
    ]);
  
    const updateData = {
      numero_serie,
      modelo,
      capacidad_carga,
      anio_fabricacion,
      ...(operativeStatus && { estado_operativo_id }),
      ...(craneType && { tipo_grua_id }),
    };
  
    return await craneRepository.update(id, updateData);
  }
  

  async deleteCrane(id) {
    return await craneRepository.delete(id);
  }
}

module.exports = new craneUseCase();
