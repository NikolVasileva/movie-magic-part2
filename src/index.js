import express from "express"
import handlebars from "express-handlebars"
import mongoose from "mongoose"

import routes from "./routes.js";

const app = express();

//Setup Database
const url = "mongodb://localhost:27017";

try {
    await mongoose.connect(url, {
        dbName: "movie-magic",
    })

    console.log("Connect to DB")
} catch(error) {
    console.error("Cannot connect to DB", error.message)
}


// Setup Handlebars
/// Setup view engine
app.engine("hbs", handlebars.engine({
    extname: "hbs",
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}));

/// Setup view engine that will be used
app.set("view engine", "hbs")

/// Setup where is location of the folder views
app.set("views", "src/views")

// Setup middlewares
app.use(express.static("src/public"));

// Parse from data request
app.use(express.urlencoded())

// Router
app.use(routes)

// Start Server
app.listen(3000, () => console.log("Server is listening to http://localhost:3000..."))