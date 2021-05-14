import axios from 'axios';

const userMedsUrl = `https://api.airtable.com/v0/${process.env.VUE_APP_AIRTABLE_BASE}/addedMeds`;

export const getUserMeds = async () => {
  const response = await axios.get(userMedsUrl, {
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_KEY}`,
    },
  });
  return response.data.records;
};
