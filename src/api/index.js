/* eslint-disable consistent-return */
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'

const options = {
  
  params: {
    latitude: '12.91285',
    longitude: '100.87808',
    
  },
  headers: {
    'X-RapidAPI-Key': 'e94303c691mshb8a1a05f39dab76p116c78jsnbbc29b818144',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};



export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, options); 
     

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://ai-trip-planner.p.rapidapi.com/', {
        params: { lat, lon: lng },
        headers: {
          'X-RapidAPI-Key': 'e94303c691mshb8a1a05f39dab76p116c78jsnbbc29b818144',
          'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }





};
