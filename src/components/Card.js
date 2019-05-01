import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { db } from '../db.js';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';

const styles = {
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  const { factory1 } = db;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>{factory1.avatar}</Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="New listed company"
        subheader="September 14, 2018"
      />
      <CardActionArea onClick={() => props.history.push('details/factory1')}>
        <CardMedia
          className={classes.media}
          image={factory1.image}
          title={factory1.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{factory1.title}</Typography>
          <Typography component="p">{factory1.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MediaCard));