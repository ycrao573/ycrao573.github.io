const API_BASE_URL = 'https://ghpage.raoyuchenom.workers.dev';

export interface TravelMarker {
  latLng: [number, number];
  name: string;
}

export interface Skill {
  icon: string;
  title: string;
  proficiency: string;
  jumpUrl?: string;
}

export const api = {
  async getTravelPlaces(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/api/travel/places`);
    if (!response.ok) {
      throw new Error(`Failed to fetch travel places: ${response.statusText}`);
    }
    return response.json();
  },

  async getTravelCountries(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/api/travel/countries`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch travel countries: ${response.statusText}`
      );
    }
    return response.json();
  },

  async getTravelMarkers(): Promise<TravelMarker[]> {
    const response = await fetch(`${API_BASE_URL}/api/travel/markers`);
    if (!response.ok) {
      throw new Error(`Failed to fetch travel markers: ${response.statusText}`);
    }
    return response.json();
  },

  async getSkills(): Promise<Skill[]> {
    const response = await fetch(`${API_BASE_URL}/api/skills`);
    if (!response.ok) {
      throw new Error(`Failed to fetch skills: ${response.statusText}`);
    }
    return response.json();
  },
};
