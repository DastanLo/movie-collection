import {ac} from './actionTypes';

export const toggleDrawer = () => ({type: ac.TOGGLE_DRAWER});

export const getMoviesGenreStart = () => ({type: ac.GET_MOVIES_GENRE_START});
export const getMoviesGenreSuccess = genres => ({type: ac.GET_MOVIES_GENRE_SUCCESS, genres});
export const getMoviesGenreError = error => ({type: ac.GET_MOVIES_GENRE_ERROR, error});


export const getUpcomingMoviesStart = () => ({type: ac.GET_UPCOMING_MOVIES_START});
export const getUpcomingMoviesError = error => ({type: ac.GET_UPCOMING_MOVIES_ERROR, error});
export const getUpcomingMoviesSuccess = movies => ({type: ac.GET_UPCOMING_MOVIES_SUCCESS, movies});

export const getPopularStart = () => ({type: ac.GET_POPULAR_MOVIES_START});
export const getPopularSuccess = popular => ({type: ac.GET_POPULAR_MOVIES_SUCCESS, popular});
export const getPopularError = error => ({type: ac.GET_POPULAR_MOVIES_ERROR, error});

export const searchMovieStart = () => ({type: ac.SEARCH_MOVIE_START});
export const searchMovieSuccess = movies => ({type: ac.SEARCH_MOVIE_SUCCESS, movies});
export const searchMovieError = error => ({type: ac.SEARCH_MOVIE_ERROR, error});

export const getMoviesByGenreStart = () => ({type: ac.GET_MOVIES_BY_GENRE_START});
export const getMoviesByGenreSuccess = movies => ({type: ac.GET_MOVIES_BY_GENRE_SUCCESS, movies});
export const getMoviesByGenreError = error => ({type: ac.GET_MOVIES_BY_GENRE_ERROR, error});

export const getMovieInfoStart = () => ({type: ac.GET_MOVIE_INFO_START});
export const getMovieInfoSuccess = movieInfo => ({type: ac.GET_MOVIE_INFO_SUCCESS, movieInfo});
export const getMovieInfoError = error => ({type: ac.GET_MOVIE_INFO_ERROR, error});

export const getMovieCastStart = () => ({type: ac.GET_MOVIE_CAST_START});
export const getMovieCastSuccess = cast => ({type: ac.GET_MOVIE_CAST_SUCCESS, cast});
export const getMovieCastError = error => ({type: ac.GET_MOVIE_CAST_ERROR, error});

export const getMovieVideoStart = () => ({type: ac.GET_MOVIE_VIDEO_START});
export const getMovieVideoSuccess = video => ({type: ac.GET_MOVIE_VIDEO_SUCCESS, video});
export const getMovieVideoError = error => ({type: ac.GET_MOVIE_VIDEO_ERROR, error});

export const getMovieImageStart = () => ({type: ac.GET_MOVIE_IMAGES_START});
export const getMovieImageSuccess = images => ({type: ac.GET_MOVIE_IMAGES_SUCCESS, images});
export const getMovieImageError = error => ({type: ac.GET_MOVIE_IMAGES_ERROR, error});

export const foundMoviesReset = () => ({type: ac.FOUND_MOVIES_RESET});
