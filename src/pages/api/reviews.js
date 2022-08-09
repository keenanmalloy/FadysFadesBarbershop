const placeId = "ChIJJ9OI1c5whlQRFe8l44TvGM0";
const apiKey = "AIzaSyCNS6Lr8lxqPgF_afnULPWh1MtliQ33LeI";
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
