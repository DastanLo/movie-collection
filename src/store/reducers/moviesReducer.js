import {ac} from '../actions/actionTypes';

const initialState = {
  movieInfo: {},
  cast: [],
  video: {},
  images: [],
  searchLoading: false,
  popular: [],
  upcoming: [],
  foundMovies: [],
  genres: [],
  error: null,
  loading: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ac.FOUND_MOVIES_RESET:
      return {...state, foundMovies: []};
    case ac.GET_MOVIES_GENRE_START:
      return {...state, loading: true};
    case ac.GET_MOVIES_GENRE_ERROR:
      return {...state, loading: false, error: action.error}
    case ac.GET_MOVIES_GENRE_SUCCESS:
      return {...state, genres: action.genres.slice(-14), error: null, loading: false};
    case ac.GET_UPCOMING_MOVIES_START:
      return {...state, loading: true};
    case ac.GET_UPCOMING_MOVIES_ERROR:
      return {...state, loading: false, error: action.error};
    case ac.GET_UPCOMING_MOVIES_SUCCESS:
      return {...state, upcoming: action.movies.slice(-6), error: null, loading: false};
    case ac.GET_POPULAR_MOVIES_START:
      return {...state, loading: true};
    case ac.GET_POPULAR_MOVIES_ERROR:
      return {...state, loading: false, error: action.error};
    case ac.GET_POPULAR_MOVIES_SUCCESS:
      return {...state, loading: false, error: null, popular: action.popular}
    case ac.SEARCH_MOVIE_START:
      return {...state, searchLoading: true};
    case ac.SEARCH_MOVIE_ERROR:
      return {...state, error: action.error, searchLoading: false};
    case ac.SEARCH_MOVIE_SUCCESS:
      return {...state, searchLoading: false, foundMovies: action.movies, error: null};
    case ac.GET_MOVIES_BY_GENRE_START:
      return {...state, loading: true};
    case ac.GET_MOVIES_BY_GENRE_ERROR:
      return {...state, error: action.error, loading: false};
    case ac.GET_MOVIES_BY_GENRE_SUCCESS:
      return {...state, popular: action.movies, loading: false, error: null};
    case ac.GET_MOVIE_INFO_START:
      return {...state, loading: true};
    case ac.GET_MOVIE_INFO_ERROR:
      return {...state, loading: false, error: action.error};
    case ac.GET_MOVIE_INFO_SUCCESS:
      return {...state, loading: false, error: null, movieInfo: action.movieInfo};
    case ac.GET_MOVIE_CAST_START:
      return {...state, loading: true};
    case ac.GET_MOVIE_CAST_ERROR:
      return {...state, loading: false, error: action.error};
    case ac.GET_MOVIE_CAST_SUCCESS:
      return {...state, loading: false, error: null, cast: action.cast.slice(0, 5)};
    case ac.GET_MOVIE_VIDEO_START:
      return {...state, loading: true};
    case ac.GET_MOVIE_VIDEO_ERROR:
      return {...state, loading: false, error: action.error};
    case ac.GET_MOVIE_VIDEO_SUCCESS:
      return {...state, loading: false, error: null, video: action.video[0]};
    case ac.GET_MOVIE_IMAGES_START:
      return {...state, loading: true};
    case ac.GET_MOVIE_IMAGES_ERROR:
      return {...state, loading: false, error: action.error};
    case ac.GET_MOVIE_IMAGES_SUCCESS:
      return {...state, loading: false, error: null, images: action.images};
    default:
      return state;
  }
};
export default moviesReducer;
