export interface CulturalSite {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
  period: string;
}

export interface FeaturedCollection {
  id: string;
  title: string;
  description: string;
  sites: CulturalSite[];
}