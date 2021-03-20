import 'dotenv/config';
import asyncHandler from 'express-async-handler';
import axios from 'axios';
import { Response, Request } from 'express';

const city = asyncHandler(async (req: Request, res: Response) => {
  try {
    const request = await encodeURI(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.params.city}`,
    );
    const { data } = await axios.get(request);
    return res.status(200).json({ data, errors: [] });
  } catch (e) {
    console.error(e);
    return res.status(404).json({ errors: 'No city found' });
  }
});
export { city };
