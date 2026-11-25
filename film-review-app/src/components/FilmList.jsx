/*(Don't forget: when you deploy this project to Netlify later, 
you will also need to 
add VITE_TMDB_API_KEY under Site configuration > Environment variables 
in your Netlify dashboard 
so the live site can fetch the films.)*/

import { useState, useEffect } from "react"; 
import FilmCard from "./FilmCard";

const FilmList = () => {
  const [ films, setFilms ] = useState([]);  

  useEffect(() => {
    const fetchFilms = async () => {
        try {
            const apiKey = import.meta.env.VITE_TMDB_API_KEY;
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`); 
            const data = await response.json();
            console.log(data.results); //logs array of 20 popular films
            setFilms(data.results);
        } catch (error) {
            console.error("Error fetching films:", error);
        }
    };

    fetchFilms();
  }, []);


  return (
    <div>{films.map((film)=>(<FilmCard key={film.id} film={film}/>))}</div>
  )
};

export default FilmList;

