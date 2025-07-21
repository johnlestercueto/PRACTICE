const BaseRepository = require('./BaseRepository');
const ProductModel = require('../models/Product');

class ProductRepository extends BaseRepository {
    constructor() {
        super(ProductModel);
    }

    async findByEmail(name) {
        return this.findOne({ name })
    }
    
 }

 module.exports = new ProductRepository();