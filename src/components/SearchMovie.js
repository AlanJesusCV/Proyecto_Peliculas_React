import React, { useState } from 'react'

export const SearchMovie = ({listState, setListState}) => {

    const [search, setSearch] = useState("");
    const [notFound, setNotFound] = useState(false);

    const searchMovie = (e) =>{
        setSearch(e.target.value);

        let filter_movies = listState.filter((movie) =>{
            return movie.title.toLowerCase().includes(search.toLowerCase());
        })

        if(search.length <= 1 || filter_movies <= 0){
            filter_movies = JSON.parse(localStorage.getItem("movies"));
            setNotFound(true);
        }else{
            setNotFound(false);
        }

        setListState(filter_movies);
    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {(notFound && search.length > 1) && (
                <span className="search-not-found">No se encontraron coincidencias.</span>
            )}
            <form>
                <input  type="text" 
                        id="search_field" 
                        name="search"
                        autoComplete="off"
                        onChange={searchMovie}
                />
            </form>
        </div>
    )
}
