// Mock GeoJSON data for building encroachment detection
import { FeatureCollection, Geometry } from 'geojson';

interface CustomProperties {
  color: string;
  area_in_meters: number;
  status: string;
  UID: string;
  latitude: number;
  longitude: number;
  risk_level: string;
  last_scanned: string;
}

export const mockGeoJsonData: FeatureCollection<Geometry, CustomProperties> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        color: "red",
        area_in_meters: 120.5,
        status: "High Risk",
        UID: "BLDG-001",
        latitude: 22.7201,
        longitude: 75.8582,
        risk_level: "High",
        last_scanned: "2023-10-15"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [75.8575, 22.7198],
          [75.8580, 22.7198],
          [75.8580, 22.7202],
          [75.8575, 22.7202],
          [75.8575, 22.7198]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        color: "yellow",
        area_in_meters: 85.3,
        status: "Medium Risk",
        UID: "BLDG-002",
        latitude: 22.7192,
        longitude: 75.8572,
        risk_level: "Medium",
        last_scanned: "2023-10-14"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [75.8568, 22.7190],
          [75.8574, 22.7190],
          [75.8574, 22.7194],
          [75.8568, 22.7194],
          [75.8568, 22.7190]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        color: "green",
        area_in_meters: 210.7,
        status: "Low Risk",
        UID: "BLDG-003",
        latitude: 22.7205,
        longitude: 75.8565,
        risk_level: "Low",
        last_scanned: "2023-10-16"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [75.8560, 22.7202],
          [75.8568, 22.7202],
          [75.8568, 22.7208],
          [75.8560, 22.7208],
          [75.8560, 22.7202]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        color: "red",
        area_in_meters: 95.2,
        status: "High Risk",
        UID: "BLDG-004",
        latitude: 22.7188,
        longitude: 75.8585,
        risk_level: "High",
        last_scanned: "2023-10-15"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [75.8582, 22.7185],
          [75.8588, 22.7185],
          [75.8588, 22.7190],
          [75.8582, 22.7190],
          [75.8582, 22.7185]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        color: "yellow",
        area_in_meters: 78.9,
        status: "Medium Risk",
        UID: "BLDG-005",
        latitude: 22.7210,
        longitude: 75.8578,
        risk_level: "Medium",
        last_scanned: "2023-10-14"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [75.8573, 22.7208],
          [75.8579, 22.7208],
          [75.8579, 22.7212],
          [75.8573, 22.7212],
          [75.8573, 22.7208]
        ]]
      }
    }
  ]
};