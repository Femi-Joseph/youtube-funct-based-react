//import React from 'react';
import axios from 'axios';
const API = 'AIzaSyCfcOlJ0LxuKXfDxIUwIU10GcQu5l7fFEI';
export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3/`,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API,
  },
});
