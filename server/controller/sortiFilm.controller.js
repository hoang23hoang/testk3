import filmModel from "../model/film.model.js";

export const sortFilm = async (req, res) => {
    try {
        const films = await filmModel.find().sort({ year: -1 });
        res.json(films);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
