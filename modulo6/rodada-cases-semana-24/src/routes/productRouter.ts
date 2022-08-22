import express from 'express'
import { ProductBusiness } from '../business/ProductBusiness';
import { ProductController } from '../controller/ProductController';
import { ProductData } from '../data/ProductData';
import IdGenerator from '../services/IdGenerator';

const productController = new ProductController(
    new ProductBusiness(
        new ProductData(),
        new IdGenerator()
    )
)

export const productRouter = express.Router()

productRouter.post('', productController.postProduct)
productRouter.get('', productController.getProducts)
