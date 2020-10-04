import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import {foundMoviesReset} from '../store/actions/movieActions';

const useStyles = makeStyles((theme) => ({
  inputInput: {
    paddingTop: '10px',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    border: 'none !important',
    margin: 0,
  },
  options: {
    background: '#262E36',
  },
}));

export default function InputAutoComplete({changeHandler, value}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const foundMovies = useSelector(state => state.movies.foundMovies);
  const loading = useSelector(state => state.movies.searchLoading);
  const history = useHistory();

  const focusOut = () => {
    dispatch(foundMoviesReset());
  };

  const getMoreInfo = (event, value) => {
    if (value) {
      history.push('/movie/detail/' + value.id);
    }
  };

  const render = (params) => {
    return <TextField
      {...params}
      onBlur={focusOut}
      margin="dense"
      value={value}
      placeholder="Search"
      className={classes.inputInput}
      onChange={changeHandler}
      InputProps={{
        ...params.InputProps,
        'aria-label': 'naked',
        endAdornment: (
          <React.Fragment>
            {loading ? <CircularProgress color="inherit" size={20}/> : null}
            {params.InputProps.endAdornment}
          </React.Fragment>
        ),
      }}
    />
  }

  const optionsClasses = {
    listbox: classes.options,
    noOptions: classes.options,
  };

  const getLabel = option => {
    return option.title;
  };

  const openOptions = () => {
    setOpen(true);
  };

  const closeOptions = () => {
    setOpen(false);
  };

  const getSelected = (option, value) => {
    return option.title === value.title;
  }

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onChange={getMoreInfo}
      onOpen={openOptions}
      onClose={closeOptions}
      classes={optionsClasses}
      getOptionSelected={getSelected}
      getOptionLabel={getLabel}
      options={foundMovies}
      loading={loading}
      clearOnBlur
      renderInput={render}
    />
  );
}
