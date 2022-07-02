import { RecipeModel } from "../model/RecipeModel";
import { BaseDB } from "./BaseDB";

export class RecipeDB extends BaseDB{

    insertRecipe = async (newRecipe: RecipeModel) => {
        await BaseDB.connection('cookenu_recipe')
        .insert({
            id: newRecipe.getId(),
            title: newRecipe.getTitle(),
            description: newRecipe.getDescription(),
            creation_date: newRecipe.getDate(),
        })
    };

    selectRecipe = async (id: string) => {
        const recipe = await BaseDB.connection('cookenu_recipe')
        .select('*')
        .where({ id })

        return recipe
    }
}
