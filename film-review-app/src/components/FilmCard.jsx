import PropTypes from "prop-types";
import "./FilmCard.css"; 

const FilmCard = ( {film} ) => {
    /*only create an img element if there is a poster path for img tag*/
    const posterUrl = film.poster_path
    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
    : null;

  return (
    <article className="film-container">
         <h3>{film.title}</h3>

         <div className="poster-wrapper">
        { posterUrl && (
            <img className="film-image" src={posterUrl} alt={`${film.title} poster`} loading="lazy" />
        )}
        <div className="film-stats">
        <p><span className="stat-label">Released:</span>{film.release_date}</p>
        <p><span className="stat-label">Overview:</span>{film.overview}</p>
        <p><span className="stat-label">Average Rating:</span>{film.vote_average ? film.vote_average.toFixed(1) : "Not rated"} / 10</p>
        </div>
        </div>
    </article>
  );
};


/* PropTypes is an external library used to validate the data types 
(and required status) of props passed into this component*/
FilmCard.propTypes = { 
    film: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
    }).isRequired,
};

export default FilmCard;