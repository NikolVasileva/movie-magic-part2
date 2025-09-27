import { Router } from "express";
import movieService from "../services/movieService.js";

const homeController = Router();

// 2. Routes
homeController.get("/", (req, res) => {
    // res.send("It works!");
    const movies = movieService.getAll()
    console.log(movies)

    res.render("home", {movies, pageTitle: "Catalog"})
});

homeController.get("/about", (req, res) => {
    res.render("about", {pageTitle: "About"})
})

export default homeController