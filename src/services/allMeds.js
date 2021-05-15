import axios from 'axios';

const airtableURL = `https://api.airtable.com/v0/${process.env.VUE_APP_AIRTABLE_BASE}/prescriptions`;

export const getAllMeds = async () => {
  const response = await axios.get(airtableURL, {
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_KEY}`,
    },
  });
  const meds = response.data.records;
  return meds;
};

export const getMedById = async (id) => {
  const medByIdUrl = `https://api.airtable.com/v0/${process.env.VUE_APP_AIRTABLE_BASE}/prescriptions/${id}`;

  const response = await axios.get(medByIdUrl, {
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_KEY}`,
    },
  });
  return response.data;
};
