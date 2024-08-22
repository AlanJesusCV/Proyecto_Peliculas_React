import React from 'react'

export const EditMovie = ({ movie, getMovies, setEditState, setListState }) => {
    const titleComponent = 'Editar Pelicula';
    const saveEdit = (e, id) => {
        e.preventDefault();

        let target = e.target;
        let movies_storage = getMovies();
        let index = movies_storage.findIndex(movie => movie.id === id);
        let obj_movie = {
            id: id,
            title: target.title.value,
            description: target.description.value
        }

        movies_storage[index] = obj_movie;
        localStorage.setItem("movies", JSON.stringify(movies_storage));
        setListState(movies_storage);
        setEditState(0);
    }

    return (
        <div className="edit_form">
            <h3 className="title">{titleComponent} : {movie.title}</h3>
            <form onSubmit={e => saveEdit(e, movie.id)}>
                <input type="text"
                    name="title"
                    className="edit_title"
                    defaultValue={movie.title} />
                <textarea
                    name="description"
                    defaultValue={movie.description}
                    className="edit_description" />
                <input type="submit" value="Actualizar" className="btn_edit"></input>
            </form>
        </div>
    )
}
