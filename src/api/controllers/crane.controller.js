const CraneUseCase = require('../../useCases/crane.useCase');

class CraneController {
  async getAllCranes(req, res) {
    try {
      const cranes = await CraneUseCase.getAllCranes();
      res.json(cranes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCraneById(req, res) {
    try {
      const crane = await CraneUseCase.getCraneById(req.params.id);
      if (crane) {
        res.json(crane);
      } else {
        res.status(404).json({ message: 'Grúa no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCrane(req, res) {
    try {
      const id = await CraneUseCase.createCrane(req.body);
      res.status(201).json({ id, message: 'Grúa creada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCrane(req, res) {
    try {
      const result = await CraneUseCase.updateCrane(req.params.id, req.body);
      if (result) {
        res.json({ message: 'Grúa actualizada exitosamente' });
      } else {
        res.status(404).json({ message: 'Grúa no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCrane(req, res) {
    try {
      const result = await CraneUseCase.deleteCrane(req.params.id);
      if (result) {
        res.json({ message: 'Grúa eliminada exitosamente' });
      } else {
        res.status(404).json({ message: 'Grúa no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CraneController();