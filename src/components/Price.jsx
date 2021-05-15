import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';

function Price(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      background: props.backgroundColor,
      color: props.color,
      marginBottom: 50,
      [theme.breakpoints.up('sm')]: {
        marginTop: props.big ? -30 : 0,
        paddingBottom: props.big ? 50 : 0,
        marginBottom: 70,
      }
    },
    content: {
      width: '80%',
    },
    header: {
      color: props.headerColor,
      fontSize: '40px',
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent class={classes.content}>
        <p>{props.title}</p>
        <h1 className={classes.header}>${props.store.value ? parseFloat(props.price / 10 - 0.01).toFixed(2) : props.price}</h1>
        <Divider />
        <p>{props.storage + ' Storage'}</p>
        <Divider />
        <p>{props.users + ' Users Allowed'}</p>
        <Divider />
        <p>{'Send up to ' + props.size + ' GB'}</p>
        <Divider />
        <CustomButton
          content='Learn More'
          background={props.buttonTheme}
          backgroundHover={props.buttonThemeHover}
          border={props.buttonTextColor}
          color={props.buttonTextColor}
          colorHover={props.buttonTextColorHover}
          width='100%'
        />
      </CardContent>
    </Card>
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
)(Price);
