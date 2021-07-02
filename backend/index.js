import app from './server.js';
import mongodb from 'mongodb';
import RestaurantsDAO from './dao/restaurantsDAO.js';
import ReviewsDAO from './dao/reviewsDAO.js';
import dotenv from 'dotenv';
dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;
MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  poolSize: 50,
  writeConcern: { wtimeout: 2500 },
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
