const service = require('../Services/SalesProductsService');

const postSalesProducts = async (req, res) => {
  const data = await service.postSalesProducts(req.body);
  return res.status(201).json(data);
};

const getAllSalesProducts = async (_req, res) => {
  const data = await service.getAllSalesProducts();
  return res.status(200).json(data);
};

module.exports = { postSalesProducts, getAllSalesProducts };
