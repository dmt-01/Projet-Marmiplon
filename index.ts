import Express from 'express';
import router from './routes/router';

const app = Express();
const PORT = 3001;

app.use (router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});










//=============================================================================//
                         //nom de variable defini ensemble//

                         
// entree, plat , dessert = category
// ingredients = ingredient
// liste ingrédient de recette = listIngredient
// instruction de recette = stepRecipe
// description de la recette = recipeDescription
//=============================================================================//


//===============================================================================
// => NomDeConstante_SpécificationDelaConstante
// => spécifier à quoi correspond la constante 

// const router => contante commune à toutes les routes
// 




