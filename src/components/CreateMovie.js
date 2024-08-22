import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const CreateMovie = ({setListState}) => {
    const componentTitle = 'Añadir Pelicula';
    const [movieState, setMovieState] = useState({});

    const {title, description} = movieState;
    const getDataForm = e =>{
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value

        let movie = {
            id: new Date().getTime(),
            title: title,
            description: description
        }
        setMovieState(movie);
        setListState((elements) =>{
            return [...elements, movie];
        });
        SaveInStorage('movies', movie);
    }

    return (
        <div className="add">
            <h3 className="title">{componentTitle}</h3>
            {(title && description) && "Haz creado: "+title}
            <form onSubmit={getDataForm}>
                <input
                    type="text"
                    placeholder="Titulo"
                    id="title"
                    name="title" 
                    required/>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Descripción"
                    required>
                </textarea>
                <input 
                    type="submit"
                    value="Guardar" />
            </form>
        </div>
    )
}
