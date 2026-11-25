import PropTypes from "prop-types";

const FilmCard = ( {film} ) => {
  return (
    <div>
        <h3>{film.original_title}</h3>
        <p>{film.release_date}</p>
        <p>{film.overview}</p>
        <p>{film.vote_average}</p>
    </div>
  );
};


/* PropTypes is an external library used to validate the data types 
(and required status) of props passed into this component*/
FilmCard.propTypes = { 
    film: PropTypes.shape({
        id: PropTypes.number.isRequired,
        original_title: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
    }).isRequired,
};

export default FilmCard;