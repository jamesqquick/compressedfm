// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { generateEpisodeCoverURL } from 'utils/coverImages';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ err: 'You can only make a post request here!' });
  }
  try {
    const { title, guestName, guestImageURL, episodeNumber, date, hosts } = req.body;

    if (!title || !episodeNumber || !date || !hosts) {
      return res
        .status(400)
        .json({ msg: 'Make sure to include required fields: title, episodeNumber, date, and hosts ' });
    }

    const coverUrl = await generateEpisodeCoverURL({ title, guestName, guestImageURL, episodeNumber, date, hosts });
    res.status(200).json({ coverUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "I DON'T KNOW!" });
  }
};
