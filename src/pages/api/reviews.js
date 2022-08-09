const placeId = process.env.GOOGLE_PLACE_ID;
const apiKey = process.env.GOOGLE_API_KEY;
const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

const getReviews = async (req, res) => {
  try {
    const details = await fetch(url);
    const {
      result:  {reviews} ,
    } = await details.json();
    res.status(200).json(reviews);
  } catch (error) {
	console.log({error});
  }
};

export default getReviews;
