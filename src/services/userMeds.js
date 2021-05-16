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

export const deleteMed = async (medId) => {
  const deleteUrl = `https://api.airtable.com/v0/${process.env.VUE_APP_AIRTABLE_BASE}/addedMeds/${medId}`;
  await axios.delete(deleteUrl, {
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_KEY}`,
    },
  });
};

export const prescribeMed = async (fields) => {
  const prescribeUrl = `https://api.airtable.com/v0/${process.env.VUE_APP_AIRTABLE_BASE}/addedMeds`;

  const response = await axios.post(
    prescribeUrl,
    { fields },
    {
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_KEY}`,
      },
    }
  );
  return response.data;
};
