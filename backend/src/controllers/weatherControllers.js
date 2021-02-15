import asyncHandler from 'express-async-handler';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const city = asyncHandler(async (req, res) => {
  try {
    const request = await encodeURI(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.params.city}`,
    );
    const response = await axios.get(request);
    return res.status(200).json({ data: response.data, errors: [] });
  } catch (e) {
    console.error(e);
    res.status(404).json({ errors: 'No city found' });
  }
});
export { city };
