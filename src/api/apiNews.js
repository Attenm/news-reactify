import axios from "axios";
import {VITE_NEWS_BASE_API_URL, VITE_NEWS_API_KEY} from '../constants';

const BASE_URL = VITE_NEWS_BASE_API_URL;
const API_KEY = VITE_NEWS_API_KEY;

export default async function getNews() {
    try {
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            }
        })
        return response.data;
    } catch (error) { 
        console.log(error);
    }
}
