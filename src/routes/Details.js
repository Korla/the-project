import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { withStyles } from '@material-ui/styles';
import { db } from '../db';
import { Typography, Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  root: {
    flexGrow: 1,
    padding: '20px 20%'
  },
  media: {
    height: 200
  },
  grid: {
    margin: '10px 0'
  }
};

function Details({ classes, match }) {
  const item = db[match.params.id];
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.grid}>
          <Typography variant="h4">
            {item.title}
          </Typography>
          <Typography variant="body1">
            {item.description}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <CardMedia
            className={classes.media}
            image={item.image}></CardMedia>
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <ResponsiveContainer width={'100 %'} height={200}>
            <LineChart data={item.data}>
              <XAxis dataKey='name' />
              <YAxis />
              <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
              <Line type='monotone' dataKey='uv' stroke='#8884d8' />
              <Line type='monotone' dataKey='pv' stroke='#82ca9d' />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Details);