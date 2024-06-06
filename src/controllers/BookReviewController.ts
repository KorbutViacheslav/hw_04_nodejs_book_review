import express, { Request, Response } from "express";
import axios from "axios";
import { getAllBookReview, createBookReview } from "../models/BookReview";

export const createReview = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { bookId, message } = req.body;
    try {
      const bookResponse = await axios.get(
        `http://localhost:8080/api/book/${bookId}`
      );
      if (bookResponse.status !== 200) {
        return res.status(400).json({ error: "Invalid book ID" });
      }
    } catch (error) {
      return res.status(400).json({ error: "Book not found" });
    }

    const review = await createBookReview({ bookId, message });
    return res.status(201).json(review);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await getAllBookReview();
    return res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
