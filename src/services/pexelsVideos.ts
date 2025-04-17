import axios from 'axios';

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = '/api/pexels/v1/videos';

const pexelsVideoApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': PEXELS_API_KEY,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: false
});

// Helper function to get proxied video URL
const getProxiedVideoUrl = (videoUrl: string) => {
  // Extract the video ID from the URL
  const videoId = videoUrl.split('/').pop()?.split('?')[0];
  return `/pexels-videos/${videoId}`;
};

// Test function to verify API connection
export const testApiConnection = async () => {
  try {
    const response = await pexelsVideoApi.get('/popular', {
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    });
    console.log('API Connection Test:', response.status, response.data);
    return true;
  } catch (error) {
    console.error('API Connection Test Failed:', error);
    if (axios.isAxiosError(error)) {
      console.error('Error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data
      });
    }
    return false;
  }
};

export interface Video {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: {
    id: number;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    fps: number;
    link: string;
  }[];
  video_pictures: {
    id: number;
    picture: string;
    nr: number;
  }[];
}

export interface VideoSearchResponse {
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: Video[];
  next_page?: string;
  prev_page?: string;
}

export const searchVideos = async (query: string, page = 1, perPage = 15): Promise<VideoSearchResponse> => {
  try {
    const response = await pexelsVideoApi.get('/search', {
      params: {
        query,
        page,
        per_page: perPage
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching videos:', error);
    throw error;
  }
};

export const getPopularVideos = async (page = 1, perPage = 15): Promise<VideoSearchResponse> => {
  try {
    const response = await pexelsVideoApi.get('/popular', {
      params: {
        page,
        per_page: perPage
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting popular videos:', error);
    throw error;
  }
};

export const getVideo = async (id: number): Promise<Video> => {
  try {
    const response = await pexelsVideoApi.get(`/videos/${id}`);
    // Update video URLs to use proxied URLs
    const video = response.data;
    video.video_files = video.video_files.map(file => ({
      ...file,
      link: getProxiedVideoUrl(file.link)
    }));
    return video;
  } catch (error) {
    console.error('Error getting video:', error);
    throw error;
  }
}; 