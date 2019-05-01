import React from 'react';
import TopNav from './components/TopNav';
import Card from './components/Card';
import { withStyles } from '@material-ui/styles';

const styles = {
  cards: {
    flexGrow: 1,
    padding: 20
  },
};

function App({ classes }) {
  return (
    <div>
      <TopNav></TopNav>
      <div className={classes.cards}>
        <Card></Card>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
