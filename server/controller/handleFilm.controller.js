// controllers/filmController.js
import filmModel from "../model/film.model.js";

export const getFilm = async(req, res) => {
    try {
        const films = await filmModel.find();
        res.json(films);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOneFilm = async(req, res) => {
    try {
        const film = await filmModel.findById(req.params.id);
        if (!film) {
            return res.status(404).json({ message: "Film not found" });
        }
        res.json(film);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addFilm = async(req, res) => {
    const film = new filmModel(req.body);
    try {
        const newFilm = await film.save();
        res.status(201).json(newFilm);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateFilm = async(req, res) => {
    try {
        const film = await filmModel.findById(req.params.id);
        if (!film) {
            return res.status(404).json({ message: "Film not found" });
        }
        if (req.body.name != null) {
            film.name = req.body.name;
        }
        if (req.body.time != null) {
            film.time = req.body.time;
        }
        if (req.body.year != null) {
            film.year = req.body.year;
        }
        if (req.body.image != null) {
            film.image = req.body.image;
        }
        if (req.body.introduce != null) {
            film.introduce = req.body.introduce;
        }
        const updatedFilm = await film.save();
        res.json(updatedFilm);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteFilm = async (req, res) => {
    try {
        const film = await filmModel.findById(req.params.id);
        if (!film) {
            return res.status(404).json({ message: "Film not found" });
        }
        await film.deleteOne(); 
        res.json({ message: "Deleted film" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

