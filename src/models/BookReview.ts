import mongoose, { Schema, Document } from "mongoose";

const BookReviewSchema: Schema = new Schema({
  bookId: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
});

export interface IBookReview extends Document {
  bookId: Number;
  message: String;
  timestamp: Date;
}

const BookReview = mongoose.model<IBookReview>("BookReview", BookReviewSchema);

export const createBookReview = (values: Record<string, any>) =>
  new BookReview(values).save().then((review) => review.toObject());
export const getAllBookReview = () => BookReview.find();

export default BookReview;
