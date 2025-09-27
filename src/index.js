import express from "express"
import handlebars from "express-handlebars"
import routes from "./routes.js";

const app = express();

//1. Setup Handlebars
/// 1.1 setup view engine
app.engine("hbs", handlebars.engine({
    extname: "hbs",
}));

/// 1.2. setup view engine that will be used
app.set("view engine", "hbs")

/// 1.3. setup where is location of the folder views
app.set("views", "src/views")

// 4. Setup middlewares
app.use(express.static("src/public"));
// 4.1 Parse from data request
app.use(express.urlencoded())

// 2. Router
app.use(routes)

// 3. Start Server
app.listen(3000, () => console.log("Server is listening to http://localhost:3000..."))