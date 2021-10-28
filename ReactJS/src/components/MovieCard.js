import React from "react";
import { MovieControls } from "./MovieControls";
import { MoviePage } from "./MoviePage";
import {Link} from 'react-router-dom';
import { Redirect } from "react-router";
import { useState } from "react";

export const MovieCard = ({ movie, type }) => {
  const [state,SetState]=useState('card');
  const onClick=() =>{
    SetState('page');
  }
  const CardChange = () =>{ SetState('card'); }
  return (
      <>
      {state === 'card' && <div className="movie-card" onClick={onClick}>
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <MovieControls type={type} movie={movie} />
      </div>}

      {state === 'page' && 
        (<div onClick={CardChange}>
           <MoviePage movie={movie} /> 
        </div>)}
      
      </>
    
  );
};
