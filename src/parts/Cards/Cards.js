import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NCard from './Card/NCard';
import useStyles from './styles.js';

const infoCards = [
  { color: '#93B5C6', title: 'Breaking News', text: 'Give me the latest news' },
  { color: '#FF2442', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Health news' },
  { color: '#BFA2DB', title: 'News by Topics', info: ' get your news down to specific topic like Bitcoin', text: 'What\'s up with PlayStation 5' },
  { color: '#7F7C82', title: 'News by Sources', info: 'get your News from specific Media House', text: 'Give me the news from CNN' },
];

const Cards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default Cards;