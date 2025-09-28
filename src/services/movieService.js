import Movie from "../models/Movie.js"

export default {
    getAll(filter) {
        let query = Movie.find()
        // const result = await Movie.find(filter).lean();
        // const resultObj = result.map(movie => movie.toObject())

        if (filter.title) {
            // query = query.filter(movie => movie.title.toLocaleLowerCase().includes(filter.title.toLocaleLowerCase()))
            query = query.find({title: { $regex: filter.title, $options: "i" } })
        }

        if (filter.genre) {
            // query = query.filter(movie => movie.genre.toLocaleLowerCase() === filter.genre.toLocaleLowerCase())
            query = query.find({genre: { $regex: new RegExp(`^${filter.genre}$`), $options: "i" } })
        }

        if (filter.year) {
            // result = result.filter(movie => movie.year === filter.year)
            // result = result.find({year: filter.year}) // mongodb variant
            query = query.where("year").equals(filter.year) // mongoose variant

        }

        return query
    },

    getOne(movieId) {
        // return Movie.findOne({id: movieId})
        return Movie.findById(movieId)
    },

    create(movieData) {
        movieData.rating = Number(movieData.rating)
        // const movie = new Movie(movieData);
        // return movie.save();

        return Movie.create(movieData)
    }
}