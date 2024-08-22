import React, { useEffect, useState } from 'react'
import { EditMovie } from './EditMovie';

export const MovieList = ({ listState, setListState }) => {
    const [editState, setEditState] = useState(0);
    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        let items = JSON.parse(localStorage.getItem("movies"));
        items === null ? setListState([]) : setListState(items);
        return items;
    }

    const deleteMovie = (id) => {
        let items = getMovies();
        let new_array_movies = items.filter((movie) => movie.id !== parseInt(id));
        setListState(new_array_movies);
        localStorage.setItem('movies', JSON.stringify(new_array_movies));
    }

    return (
        <>
            {listState.length > 0 ?
                listState.map(movie => {
                    return (
                        <article key={movie.id} className="movie-item">
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.decription} </p>

                            <button className="edit" onClick={() => setEditState(movie.id)}>Editar</button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>Eliminar</button>

                            {editState === movie.id && (
                                <EditMovie movie={movie}
                                    getMovies={getMovies}
                                    setEditState={setEditState}
                                    setListState={setListState} />
                            )}
                        </article>
                    )
                })
                : <h2>No hay peliculas para mostrar.</h2>}
        </>
    )
}
