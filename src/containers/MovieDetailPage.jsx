import React, {useEffect} from 'react';
import {NavLink as RouterNavLink, useParams} from 'react-router-dom';
import {Avatar, Container, Toolbar} from '@material-ui/core';
import Slider from '../components/Slider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieCast, getMovieImages, getMovieInfo, getMovieVideo} from '../store/asyncActions/movies';
import {DEFAULT_IMAGE, IMAGE_URL} from '../config/constants';
import {Skeleton} from '@material-ui/lab';
import Drawer from '@material-ui/core/Drawer';
import {toggleDrawer} from '../store/actions/movieActions';
import Hidden from '@material-ui/core/Hidden';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ErrorMessage from '../components/ErrorMessage';

const useStyles = makeStyles((theme) => ({
  description: {
    background: '#ccc',
    padding: '25px',
    border: '1px solid #fff'
  },
  avatar: {
    width: '100%',
    height: '100%',
    maxHeight: '180px',
    maxWidth: '180px',
  },
  title: {
    fontSize: '30px',
    color: '#ccc',
    textTransform: 'uppercase',
    paddingLeft: '20px',
  },
  subTitle: {
    fontSize: '22px',
    color: '#ccc',
    marginTop: '5px',
  },
  box: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
    },
  },
  video: {
    height: 250,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: 400,
      width: '70%',
    },
  },
  skeleton: {
    margin: '0 auto',
  },
  hiddenPaper: {
    backgroundColor: '#15181E',
  },
}));

const MovieDetailPage = () => {
  const classes = useStyles();
  const cast = useSelector(state => state.movies.cast);
  const error = useSelector(state => state.movies.error);
  const drawerOpen = useSelector(state => state.main.drawerOpen);
  const images = useSelector(state => state.movies.images);
  const movieInfo = useSelector(state => state.movies.movieInfo);
  const video = useSelector(state => state.movies.video);
  const loading = useSelector(state => state.movies.loading);
  const dispatch = useDispatch();
  const {id} = useParams();

  const paperClass = {
    paper: classes.hiddenPaper,
  };

  const toggle = () => {
    dispatch(toggleDrawer());
  };

  const props = {
    keepMounted: true,
  }

  useEffect(() => {
    dispatch(getMovieInfo(id));
    dispatch(getMovieCast(id));
    dispatch(getMovieVideo(id));
    dispatch(getMovieImages(id));
  }, [dispatch, id])

  return (
    <>
      <Toolbar/>
      {error ? <ErrorMessage/> : null}
      {
        loading ?
          <>
            <Skeleton className={classes.skeleton} height={50} width={900} variant="text" animation="wave"/>
            <Skeleton className={classes.skeleton} width={900} variant="rect" height={400} animation="wave"/>
          </> :
          <Slider images={images} title={movieInfo.title}/>
      }

      <Container>
        <Grid container spacing={5} direction="column" justify="center">
          {
            loading ? <Skeleton className={classes.skeleton} width={1000} height={100} variant="text" animation="wave"/>
              :
              <Grid item container justify="center" className={classes.description}>
                <Typography>
                  {movieInfo.overview}
                </Typography>
              </Grid>
          }
          <Grid item>
            <Typography className={classes.title}>
              Cast
            </Typography>
          </Grid>
          <Grid item container direction="row" spacing={3} alignItems="center" className={classes.box}>
            {(loading ? Array.from(new Array(5)) : cast).map((person, index) => {
              return person ? <Grid item key={person.id}>
                  <Grid container alignItems="center" direction="column">
                    <Avatar alt="Remy Sharp"
                            src={person.profile_path ? IMAGE_URL + person.profile_path : DEFAULT_IMAGE}
                            className={classes.avatar}/>
                    <Typography className={classes.subTitle}>{person.name}</Typography>
                  </Grid>
                </Grid> :
                <Grid item key={index}>
                  <Grid container alignItems="center" direction="column">
                    <Skeleton className={classes.avatar}/>
                    <Skeleton variant="text" animation="wave"><Typography
                      className={classes.subTitle}>{'Adam tomason'}</Typography></Skeleton>
                  </Grid>
                </Grid>
            })}
          </Grid>
          <Grid style={{marginBottom: '40px'}} item container direction="row" justify="center" alignItems="center">
            {loading ? <Skeleton width={700} height={400} className={classes.skeleton} variant="rect" animation="wave"/>
              :
              <iframe className={classes.video} title={movieInfo.title} height="400"
                      src={'https://www.youtube.com/embed/' + video.key} frameBorder="0"
                      allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>}
          </Grid>
        </Grid>
      </Container>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={toggle}
          classes={paperClass}
          ModalProps={props}
        >
          <MenuList>
            <MenuItem
              component={RouterNavLink}
              to="/"
              activeClassName="Mui-selected">
              Главная
            </MenuItem>
          </MenuList>
        </Drawer>
      </Hidden>
    </>
  );
};

export default MovieDetailPage;
