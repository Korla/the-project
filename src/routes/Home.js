import React from 'react';
import Card from '../components/Card';
import { withStyles } from '@material-ui/styles';

const styles = {
  cards: {
    flexGrow: 1,
    padding: 20
  },
};

function Home({ classes }) {
  return (
    <div className={classes.cards}>
      <Card></Card>
    </div>
  )
}

export default withStyles(styles)(Home);