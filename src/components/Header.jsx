import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {fade, makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {toggleDrawer} from '../store/actions/movieActions';
import {searchMovie} from '../store/asyncActions/movies';
import InputAutoComplete from './InputAutoComplete';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#15181E',
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    color: '#B3BDCC',
    fontSize: '22px',
    fontWeight: '700',
    letterSpacing: '7px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    flexGrow: 1,
    display: 'none',
    '&:hover': {
      color: '#FFD814',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    flexGrow: 2,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(searchMovie(e.target.value));
  }

  const toggle = () => {
    dispatch(toggleDrawer());
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={toggle}
          aria-label="open drawer"
        >
          <MenuIcon/>
        </IconButton>
        <NavLink to="/" className={classes.title}>
          Movies
        </NavLink>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon/>
          </div>
          <InputAutoComplete value={input} changeHandler={inputChangeHandler}/>
        </div>
        <Typography className={classes.title} variant="h6" noWrap/>
      </Toolbar>
    </AppBar>
  );
}
