import React from 'react';
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import {useDispatch, useSelector} from 'react-redux';
import {toggleDrawer} from '../store/actions/movieActions';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    backgroundColor: '#15181E',
    border: 'none',
    width: drawerWidth,
  },
  hiddenPaper: {
    backgroundColor: '#15181E',
    border: 'none',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
}));


const DrawerLayout = ({children, drawerContent}) => {
  const dispatch = useDispatch();
  const drawerOpen = useSelector(state => state.main.drawerOpen);
  const classes = useStyles();

  const paperClass = {
    paper: classes.hiddenPaper,
  };

  const props = {
    keepMounted: true,
  };

  const drawerPaper = {
    paper: classes.drawerPaper,
  };

  const toggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={toggle}
            classes={paperClass}
            ModalProps={props}
          >
            {drawerContent}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={drawerPaper}
            variant="permanent"
            open
          >
            <Toolbar/>
            {drawerContent}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Toolbar/>
        {children}
      </main>
    </div>
  );
};

export default DrawerLayout;
