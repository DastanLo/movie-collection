import {axiosInstance} from '../../config/axiosInstance';
import {
  getMovieCastError,
  getMovieCastStart,
  getMovieCastSuccess, getMovieImageError, getMovieImageStart, getMovieImageSuccess,
  getMovieInfoError,
  getMovieInfoStart,
  getMovieInfoSuccess,
  getMoviesByGenreError,
  getMoviesByGenreStart,
  getMoviesByGenreSuccess,
  getMoviesGenreError,
  getMoviesGenreStart,
  getMoviesGenreSuccess,
  getMovieVideoError,
  getMovieVideoStart,
  getMovieVideoSuccess,
  getPopularError,
  getPopularStart,
  getPopularSuccess,
  getUpcomingMoviesError,
  getUpcomingMoviesStart,
  getUpcomingMoviesSuccess,
  searchMovieError,
  searchMovieStart,
  searchMovieSuccess
} from '../actions/movieActions';
import {API_KEY} from '../../config/constants';

export const getAllGenres = () => async dispatch => {
  try {
    dispatch(getMoviesGenreStart());
    const response = await axiosInstance.get(`/genre/movie/list?api_key=${API_KEY}`);
    dispatch(getMoviesGenreSuccess(response.data.genres));
  } catch (e) {
    getMoviesGenreError(e);
  }
}

export const getMoviesUpcoming = () => async dispatch => {
  try {
    dispatch(getUpcomingMoviesStart())
    const response = await axiosInstance.get(`/movie/upcoming?api_key=${API_KEY}&page=1`);
    dispatch(getUpcomingMoviesSuccess(response.data.results));
  } catch (e) {
    dispatch(getUpcomingMoviesError());
  }
}

export const getPopularMovies = (page) => async dispatch => {
  try {
    dispatch(getPopularStart())
    const response = await axiosInstance.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=` + page);
    dispatch(getPopularSuccess(response.data.results));
  } catch (e) {
    dispatch(getPopularError(e));
  }
}

export const searchMovie = (name) => async dispatch => {
  try {
    dispatch(searchMovieStart());
    const response = await axiosInstance.get(`/search/movie?api_key=${API_KEY}&query=${name}&page=1`);
    dispatch(searchMovieSuccess(response.data.results));
  } catch (e) {
    dispatch(searchMovieError(e));
  }
}

export const getMoviesByGenre = (id, page) => async dispatch => {
  try {
    dispatch(getMoviesByGenreStart());
    const response = await axiosInstance.get(`discover/movie?api_key=${API_KEY}&with_genres=${id}&language=en-US&page=${page}`);
    dispatch(getMoviesByGenreSuccess(response.data.results));
  } catch (e) {
    dispatch(getMoviesByGenreError(e));
  }
}

export const getMovieInfo = id => async dispatch => {
  try {
    dispatch(getMovieInfoStart());
    const response = await axiosInstance.get(`/movie/${id}?api_key=${API_KEY}`);
    dispatch(getMovieInfoSuccess(response.data));
  } catch (e) {
    dispatch(getMovieInfoError(e));
  }
}

export const getMovieCast = id => async dispatch => {
  try {
    dispatch(getMovieCastStart());
    const response = await axiosInstance.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    dispatch(getMovieCastSuccess(response.data.cast));
  } catch (e) {
    dispatch(getMovieCastError(e));
  }
}

export const getMovieVideo = id => async dispatch => {
  try {
    dispatch(getMovieVideoStart());
    const response = await axiosInstance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
    dispatch(getMovieVideoSuccess(response.data.results));
  } catch (e) {
    dispatch(getMovieVideoError(e));
  }
}

export const getMovieImages = id => async dispatch => {
  try {
    dispatch(getMovieImageStart());
    const response = await axiosInstance.get(`/movie/${id}/images?api_key=${API_KEY}`);
    dispatch(getMovieImageSuccess(response.data.posters));
  } catch (e) {
    dispatch(getMovieImageError(e));
  }
}
