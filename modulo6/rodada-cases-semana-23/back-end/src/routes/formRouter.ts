import express from 'express';
import { FormBusiness } from '../business/FormBusiness';
import { FormController } from '../controller/FormController';
import FormDB from '../data/FormDB';
import IdGenerator from '../services/IdGenerator';

const formController = new FormController(
    new FormBusiness(
        new FormDB(),
        new IdGenerator()
    )
)

export const formRouter = express.Router()

formRouter.post('', formController.postForm)
formRouter.get('', formController.getFormData)
formRouter.delete('', formController.deleteData)
