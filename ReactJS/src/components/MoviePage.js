import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export const MoviePage = ({movie}) =>{

    return(
        <>
        <div className="mpage">
            <img className="mpage_banner" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} ></img>
            <div className="mpage_info">
                <div className="mpage_info-title">{movie.title}</div>
                <div className="mpage_info-overview">Overview</div>
                <p className="mpage_info-description">{movie.overview}</p>
                <div className="mpage__info-misc">
                    <div className="mpage_info-release_date">Release Date: {movie.release_date}</div>
                    <div className="mpage_info-original_language">Original Language: {movie.original_language}</div>
                    <div className="mpage_vote_average">Vote Average: {movie.vote_average}</div>
                </div>
                <Link to="/"><button className="back">Back</button></Link>
            </div>
        </div>
        
        </>
    );
};