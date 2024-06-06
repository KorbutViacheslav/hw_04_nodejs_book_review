//*Controllers*/
export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await getAllBookReview();
    return res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getReviewById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const review = await getBookReviewById(id);
    if (!review) {
      return res.sendStatus(404);
    }
    return res.status(200).json(review);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { message } = req.body;

    const review = await updateBookReview(id, { message });
    if (!review) {
      return res.sendStatus(404);
    }
    return res.status(200).json(review);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const review = await deleteBookReviewById(id);
    if (!review) {
      return res.sendStatus(404);
    }
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

//*Model*/
export const getBookReviewById = (id: string) => BookReview.findById(id);
export const deleteBookReviewById = (id: string) =>
  BookReview.findOneAndDelete({ _id: id });
export const updateBookReview = (id: string, values: Record<string, any>) =>
  BookReview.findByIdAndUpdate(id, values);

//*Routes*/
router.get("/api/review/:id", getReviewById);
router.delete("/api/review/:id", deleteReview);
