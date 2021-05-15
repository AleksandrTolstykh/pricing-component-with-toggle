import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  text: {
    color: 'hsl(234, 14%, 74%)',
  },
});

const AntSwitch = withStyles({
  root: {
    width: 36 * 1.25,
    height: 20 * 1.25,
    padding: 0,
    marginTop: 15,
    marginBottom: 60,
    display: 'flex',
  },
  switchBase: {
    padding: 4,
    color: 'hsl(0, 0%, 100%)',
    '&$checked': {
      transform: 'translateX(18x)',
      color: 'hsl(0, 0%, 100%)',
      '& + $track': {
        opacity: 1,
        background: 'linear-gradient(-45deg, hsl(237, 63%, 64%), hsl(236, 72%, 79%))',
      },
      '&:hover': {
          '& + $track': {
            opacity: 0.5,
        },
      },
    },
    '&:hover': {
        '& + $track': {
          opacity: 0.5,
      },
    },
  },
  thumb: {
    width: 14 * 1.25,
    height: 14 * 1.25,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 20 / 1.5,
    opacity: 1,
    background: 'linear-gradient(-45deg, hsl(237, 63%, 64%), hsl(236, 72%, 79%))',
  },
  checked: {},
})(Switch);

function Toggle(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.onSwitch(event.target.checked);
  };

  return (
    <Grid container spacing={3} justify='center'>
      <Grid item>
        <p className={classes.text}>Annualy</p>
      </Grid>
      <Grid item>
        <AntSwitch checked={props.store.value} onChange={handleChange} />
      </Grid>
      <Grid item>
        <p className={classes.text}>Monthly</p>
      </Grid>
    </Grid>
  );
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    onSwitch: (value) => {
      dispatch({ type: 'switched', value: value });
    }
  })
)(Toggle);
