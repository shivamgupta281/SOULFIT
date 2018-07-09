import React, { Fragment } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
                    "Purple2": "#e7c2ee",
                    "Purple1": "#a188c9",
                    "Cyan": "#9bf9e6"
};

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: "Cyan"
    },
  });

  function FullWidthGrid(props) {
    const { classes } = props;
  
    return (
        <Fragment>
<div className={classes.root}>
      <Grid container spacing={20}>
        <Grid item xs={12} sm={6}> >
          <Paper className={classes.paper}>xs=12
          
          
          
          </Paper>
        </Grid>
        </Grid>

</div>
</Fragment>
);
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FullWidthGrid);