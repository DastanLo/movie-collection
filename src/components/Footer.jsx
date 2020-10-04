import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#15181E',
    boxShadow: 'none',
    zIndex: 2000,
  },
  title: {
    margin: '0  0  0 auto',
    color: '#DBDBDB',
    fontSize: '16px'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6">Code by Dastan</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
