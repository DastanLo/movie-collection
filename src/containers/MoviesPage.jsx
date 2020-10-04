import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink as RouterNavLink, useParams} from "react-router-dom";
import DrawerLayout from '../components/DrawerLayout';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import MovieCard from '../components/MovieCard';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {getAllGenres, getMoviesByGenre, getMoviesUpcoming, getPopularMovies} from '../store/asyncActions/movies';
import Skeleton from '@material-ui/lab/Skeleton';
import Container from '@material-ui/core/Container';
import ErrorMessage from '../components/ErrorMessage';


const useStyles = makeStyles((theme) => ({
  title: {
    color: '#B3BDCC',
    paddingTop: '0',
    paddingLeft: '10px',
  },
  moviesTitle: {
    color: '#B3BDCC',
  },
  item: {
    backgroundColor: 'transparent !important',
    '&:hover': {
      color: '#FFD814',
      backgroundColor: 'rgba(255, 255, 255, 0.08) !important'
    },
  },
  newMovies: {
    marginBottom: '40px',
  },
  pagination: {
    marginBottom: '30px',
    color: '#fff',
  }
}));


export default function MoviesPage() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const {id} = useParams();
  const error = useSelector(state => state.movies.error);
  const loading = useSelector(state => state.movies.loading);
  const popular = useSelector(state => state.movies.popular);
  const upcoming = useSelector(state => state.movies.upcoming);
  const genres = useSelector(state => state.movies.genres);
  const dispatch = useDispatch();

  const pageChangeHandler = (e, value) => {
    if (id) {
      return setPage(value);
    }
    dispatch(getPopularMovies(value));
    setPage(value);
  };

  const drawerContent = (
    <MenuList className={classes.title}>
      {
        (loading ? Array.from(new Array(15)) : genres).map((genre, index) => {
          return genre ? <MenuItem
              key={genre.id}
              className={classes.item}
              component={RouterNavLink}
              to={'/genre/' + genre.id} exact
              activeClassName="Mui-selected"
            >
              {genre.name}
            </MenuItem> :
            <Skeleton key={index}>
              <MenuItem
                className={classes.item}
                component={RouterNavLink}
                to="/" exact
                activeClassName="Mui-selected">
                loadingSpinner
              </MenuItem>
            </Skeleton>
        })
      }
    </MenuList>
  );

  useEffect(() => {
    if (id) {
      dispatch(getMoviesByGenre(id, page));
    }
  }, [id, dispatch, page]);

  useEffect(() => {
    dispatch(getAllGenres());
    dispatch(getMoviesUpcoming());
    dispatch(getPopularMovies(1));
  }, [dispatch]);

  return (
    <Container>
      <DrawerLayout drawerContent={drawerContent}>
        {error ? <ErrorMessage/> : null}
        <Grid container justify="center" direction="column" spacing={2}>
          {
            id ? null
              : <>
                <Grid item>
                  <Typography className={classes.moviesTitle} variant="h5">
                    Upcoming
                  </Typography>
                </Grid>
                <Grid item>
                  <MovieCard upcoming={upcoming}/>
                </Grid>
              </>
          }
          <Grid item>
            <Typography className={classes.moviesTitle} variant="h5">
              {id ? 'Movies' : 'Popular'}
            </Typography>
          </Grid>
          <Grid item className={classes.newMovies}>
            <MovieCard upcoming={popular}/>
          </Grid>
          <Grid container justify="center" className={classes.pagination}>
            <Pagination onChange={pageChangeHandler} count={10} page={page}/>
          </Grid>
        </Grid>
      </DrawerLayout>
    </Container>
  );
}
