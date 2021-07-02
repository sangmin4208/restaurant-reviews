import express from 'express';
import ReviewCtrl from './reviews.controller.js';
const router = express.Router();
router
  .route('/')
  .post(ReviewCtrl.apiPostReview)
  .put(ReviewCtrl.apiUpdateReview)
  .delete(ReviewCtrl.apiDeleteReview);

export default router;
