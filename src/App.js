import { useState } from "react";
import { SearchMovie } from "./components/SearchMovie";
import { CreateMovie } from "./components/CreateMovie";
import { MovieList } from "./components/MovieList";

function App() {
  const [listState, setListState] = useState([]);
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play">
          </div>
        </div>
        <h1>Mis Peliculas</h1>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>
      <section className="content">
        <MovieList listState={listState} setListState={setListState} />
      </section>
      <aside className="lateral">
        <SearchMovie listState={listState} setListState={setListState} />
        <CreateMovie setListState={setListState} />
      </aside>
      <footer className="footer">
        &copy; Master en Javascript ES12 Y Typescript - <a href="/#">Link</a>
      </footer>
    </div>
  );
}

export default App;
