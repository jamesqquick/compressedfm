//!I create this file separate from client.js because of the dependency on request and the fact that it should only be imported inside of backend code
import request from 'request';
import client from  "utils/client";
import { basename } from 'path';

export const addWaveformToEpisode = async (episodeId, waveformURL) => {
  const uploadedWaveformImage = await client.assets.upload('image', request(waveformURL), {
      filename: basename(`episode-${episodeId}-waveform`),
  });
  //update episode with waveformURL
  const updatedEpisode = await client
    .patch(episodeId) 
    .set({waveform: {
        _type: 'image',
        asset: {
            _ref: uploadedWaveformImage._id,
            _type: 'reference',
        },
    }}) 
    .commit() 
  return updatedEpisode;
}


