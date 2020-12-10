export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/add`

export const logURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/log`


export const config = {
  headers: {
    "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  },
}