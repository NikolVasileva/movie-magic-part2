import { Router } from "express";

import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";

// 2. Rourtes
const routes = Router();

routes.use(homeController);
routes.use("/movies", movieController)

// Add not found Pgae -> 404 Page
routes.get("/*splat", (req, res) => {
    res.render("404")
})

export default routes;