import getReviews from "./reviews";


export default async function handler(req, res) {
  res.status(200).json(reviews);
}

