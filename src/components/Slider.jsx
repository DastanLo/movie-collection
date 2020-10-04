import React, {useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {IMAGE_URL_BIG} from '../config/constants';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '100px',
    maxWidth: '100%',
    flexGrow: 1,
  },
  title: {
    fontSize: '25px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#ccc',
  },
  img: {
    [theme.breakpoints.up('md')]: {
      height: '624px',
    },
    height: '300px',
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}));

function Slider({title, images}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography className={classes.title}>{title}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
      >
        {images.map((step, index) => (
          <div key={step.file_path}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={IMAGE_URL_BIG + step.file_path} alt={step.file_path}/>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Slider;
