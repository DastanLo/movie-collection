import React from 'react';
import {useHistory} from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {makeStyles} from '@material-ui/core/styles';
import {IMAGE_URL} from '../config/constants';
import {useSelector} from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  gridList: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  gridItem: {
    marginBottom: '10px',
    cursor: 'pointer',
    maxWidth: '33%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '16%',
      marginRight: '5px',
    },
  }
}));

const MovieCard = ({upcoming}) => {
  const classes = useStyles();
  const loading = useSelector(state => state.movies.loading);
  const history = useHistory();

  const getMoreInfo = id => {
    history.push('/movie/detail/' + id);
  };

  return (
    <GridList className={classes.gridList}>
      {
        (loading ? Array.from(new Array(20)) : upcoming).map((movie, index) => {
          return <GridListTile onClick={getMoreInfo.bind(null, movie?.id)} key={movie ? movie.id : index}
                               className={classes.gridItem}>
            {movie ? (
              <img src={IMAGE_URL + movie.poster_path} alt={'poster'}/>
            ) : (
              <Skeleton animation="wave" width={255} height={169}>
                <img src="https://image.tmdb.org/t/p/w300//jkAZb9jteax1XRnEFlCU9Oer1YJ.jpg" alt="movie"/>
              </Skeleton>
            )
            } {movie ? <GridListTileBar
            title={movie.title}
            subtitle={<span>{movie.release_date}</span>}
          /> : <GridListTileBar
            title={<Skeleton/>}
            subtitle={<Skeleton/>}
          />
          }
          </GridListTile>
        })
      }
    </GridList>
  );
};

export default MovieCard;
