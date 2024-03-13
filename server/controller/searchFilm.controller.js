import filmModel from "../model/film.model.js";

export const searchFilm = async(req,res) =>{
    const {name} = req.query;
    try {
        const films = await filmModel.find({name:{ $regex: name, $options: 'i' }})
        res.json(films);
    } catch (error) {
        res.status(500).json({message:  error.message});
    }
}