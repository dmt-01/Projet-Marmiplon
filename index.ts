import  {router} from './routes'
import Express from "express";
import { fileURLToPath } from "node:url";
import path from "node:path";

const app = Express();
const PORT = 3001;
// const router = Router();

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(Express.static(path.join(__dirname, "public")));
app.use(router);

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
