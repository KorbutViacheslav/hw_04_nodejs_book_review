import { Router } from "express";
import { createReview, getReviews } from "../controllers/BookReviewController";

export default (router: Router): void => {
  router.post("/api/review", createReview);
  router.get("/api/reviews", getReviews);
};
