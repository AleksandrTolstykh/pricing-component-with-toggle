import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toggle from './Toggle';
import Price from './Price';
import Footer from './Footer';
import prices from '../prices';

document.body.style.background = 'url(images/bg-top.svg) right top, url(images/bg-bottom.svg) left bottom';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundColor = 'hsl(240, 78%, 98%)';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'hsl(233, 13%, 49%)',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1 className={classes.title}>Our Pricing</h1>
      <Toggle />
      <Grid container>
        {prices.map(item => {
          return (
            <Grid item xs={12} sm={4}>
              <Price
                backgroundColor={item.backgroundColor}
                headerColor={item.headerColor}
                color={item.color}
                buttonTheme={item.buttonTheme}
                buttonThemeHover={item.buttonThemeHover}
                buttonTextColor={item.buttonTextColor}
                buttonTextColorHover={item.buttonTextColorHover}
                title={item.title}
                price={item.price}
                storage={item.storage}
                users={item.users}
                size={item.size}
                big={item.big}
              />
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;
