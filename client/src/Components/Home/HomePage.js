import React, { useState, useEffect } from "react";

export default function HomePage() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/film/all-films")
            .then((response) => response.json())
            .then((data) => setFilms(data))
            .catch((error) => console.error("Error fetching films:", error));
    }, []);

    return (
        <>
            <h2 style={{margin: 50}}>Most popular movies</h2>
            <div className="container-film">
                {films.map((film) => (
                    <div className="border-film">
                        <div key={film._id} className="card-film">
                            <img src={film.image} alt={film.name} className="img-film" />
                            <div>
                                <h3>{film.name}</h3>
                                <div className="time-film">
                                    <p style={{ color: "gray" }}>Time: {film.time}</p>
                                    <p style={{ color: "gray" }}>Year: {new Date(film.year).getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
