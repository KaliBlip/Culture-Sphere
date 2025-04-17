import axios from 'axios';

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1';

const pexelsApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: PEXELS_API_KEY
  }
});

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

export interface PhotoSearchResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: Photo[];
  next_page?: string;
  prev_page?: string;
}

export const searchPhotos = async (query: string, page = 1, perPage = 15): Promise<PhotoSearchResponse> => {
  try {
    const response = await pexelsApi.get('/search', {
      params: {
        query,
        page,
        per_page: perPage
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching photos:', error);
    throw error;
  }
};

export const getCuratedPhotos = async (page = 1, perPage = 15): Promise<PhotoSearchResponse> => {
  try {
    const response = await pexelsApi.get('/curated', {
      params: {
        page,
        per_page: perPage
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting curated photos:', error);
    throw error;
  }
};

export const getPhoto = async (id: number): Promise<Photo> => {
  try {
    const response = await pexelsApi.get(`/photos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting photo:', error);
    throw error;
  }
}; 