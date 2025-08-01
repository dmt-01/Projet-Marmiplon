import Express from 'express';
import router from './routes/router';
import { fileURLToPath } from "node:url";
import path from "node:path";

const app = Express();
const PORT = 3001;

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(Express.static(path.join(__dirname, "public")));
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


