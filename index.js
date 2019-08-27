import dotenv from 'dotenv';
dotenv.config();

import Traveler from 'the-traveler';
import urlEncode from './helpers/url_encode.js';

const traveler = new Traveler.default({
  apikey: process.env.API_KEY
});

(async () => {
  const gamertag = urlEncode('m0sley#2865');
  const player = await traveler
    .destiny2
    .searchDestinyPlayer('-1', gamertag);

  console.log({ player });
})();
