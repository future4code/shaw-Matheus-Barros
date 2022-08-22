import { ProductData } from "../data/ProductData";
import { GetProductsDTO } from "../model/GetProductsDTO";
import { PostProductDTO } from "../model/PostProductDTO"
import { ProductDTO } from "../model/ProductDTO";
import { TagsDTO } from "../model/TagsDTO";
import IdGenerator from "../services/IdGenerator";

export class ProductBusiness {

    constructor(
        private productData: ProductData,
        private idGenerator: IdGenerator
    ){ }

    public postProduct = async (newProduct: PostProductDTO): Promise<void> => {
        try {
            const { name, tags } = newProduct

            if(!name || tags.length === 0){
                throw new Error("All fields are mandatory.");
            }

            if(typeof name !== "string"){
                throw new Error("'Name' must be of type STRING.");
            }

            if( !(Array.isArray(tags)) ){
                throw new Error("'Tags' must be of type ARRAY.");
            }

            const id = this.idGenerator.idGenerator()

            const product: ProductDTO = {id, name} 

            const tagsProduct: TagsDTO[] = tags.map((tag: string) => {
                const id = this.idGenerator.idGenerator()

                return {id, name: tag}
            })

            await this.productData.insertProduct(product, tagsProduct)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }   

    public getProducts = async (options: GetProductsDTO): Promise<ProductDTO[]> => {
        try {
            const { id, name, tag } = options

            if(!id && !name && !tag){
                throw new Error("At least one of the fields is mandatory: 'id', 'name', 'tag'.");
            }

            const newId = id === undefined ? "Undefined" : id
            const newName = name === undefined ? "Undefined" : name
            const newTag = tag === undefined ? "Undefined" : tag

            const products = await this.productData.selectProduct(newId, newName, newTag) 

            return products

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
} 