import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading">loading</div>;
  }

  return (
    <section className="movies">
      {movies.map((item) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = item;
        return (
          <Link key={id} to={`/movies/${id}`} className="movie">
            <article>
              {/* <img src={poster} alt={title} /> */}
              {/* if there is no poster, then display NO PHOTO pic */}
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
