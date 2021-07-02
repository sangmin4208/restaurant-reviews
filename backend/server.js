import express from 'express';
import cors from 'cors';
import restaurants from './api/restaurants.route.js';
import reviews from './api/reviews.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/restaurants', restaurants);
app.use('/api/v1/review', reviews);

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;
