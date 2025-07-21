const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController')
const upload = require('../middlewares/upload')
const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/isAdmin')

router.get('/', productController.getAllProduct)
router.get('/:id',productController.getproduct)
router.post('/', upload.single('image') , productController.createProduct)
router.put('/:id', auth, isAdmin, upload.single('image'), productController.updateProduct)
router.delete('/:id',auth, isAdmin, productController.deleteProduct)

module.exports = router;