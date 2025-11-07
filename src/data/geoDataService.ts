// src/data/geoDataService.ts
import { mockGeoJsonData } from '@/data/mockGeoData';
import { FeatureCollection, Feature, Geometry, GeoJsonProperties } from 'geojson';

// Type definitions
interface CustomProperties extends GeoJsonProperties {
  color: string;
  area_in_meters: number;
  status: string;
  UID: string;
  latitude: number;
  longitude: number;
  risk_level: string;
  last_scanned: string;
}

// Function to filter data based on bounds (simulating backend behavior)
export const filterGeoDataByBounds = (
  north: number,
  south: number,
  east: number,
  west: number
): FeatureCollection<Geometry, CustomProperties> => {
  const filteredFeatures = mockGeoJsonData.features.filter(feature => {
    try {
      const coords = feature.geometry.coordinates[0];
      const lngs = coords.map((c: number[]) => c[0]);
      const lats = coords.map((c: number[]) => c[1]);
      
      return (
        Math.min(...lats) <= north && Math.max(...lats) >= south &&
        Math.min(...lngs) <= east && Math.max(...lngs) >= west
      );
    } catch {
      return false;
    }
  });

  return {
    type: "FeatureCollection",
    features: filteredFeatures as Feature<Geometry, CustomProperties>[]
  } as FeatureCollection<Geometry, CustomProperties>;
};

// Service to fetch geo data (simulating API call)
export const fetchGeoData = async (
  north: number,
  south: number,
  east: number,
  west: number
): Promise<FeatureCollection<Geometry, CustomProperties>> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return filterGeoDataByBounds(north, south, east, west);
};