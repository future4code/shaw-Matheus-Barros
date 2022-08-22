import { BaseDB } from "./BaseDB"
import { ProductDTO } from "../model/ProductDTO"
import { TagsDTO } from "../model/TagsDTO"

export class ProductData extends BaseDB {
    
    protected PRODUCT_TABLE = 'PRODUCT_NAME'
    protected TAG_TABLE = 'PRODUCT_TAG'

    insertProduct = async (newProduct: ProductDTO, tags: TagsDTO[]): Promise<void> => {
        try {
            await BaseDB.connection(this.PRODUCT_TABLE)
            .insert(newProduct)

            for(const tag of tags){
                await BaseDB.connection(this.TAG_TABLE)
                .insert({ 
                    id: tag.id, 
                    name: tag.name, 
                    product_id: newProduct.id 
                })
            }

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectProduct = async (id: string, name: string, tag: string): Promise<ProductDTO[]> => {
        try {
            const result: ProductDTO[] = await BaseDB.connection(this.PRODUCT_TABLE)
            .select(`${this.PRODUCT_TABLE}.id as id`, `${this.PRODUCT_TABLE}.name as name`)
            .join(`${this.TAG_TABLE}`, `${this.TAG_TABLE}.product_id`, `${this.PRODUCT_TABLE}.id`)
            .where(`${this.PRODUCT_TABLE}.id`, id)
            .orWhere(`${this.PRODUCT_TABLE}.name`, "like", `%${ name }%`)
            .orWhere(`${this.TAG_TABLE}.name`, "like", `%${ tag }%`)

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
} 
