// src/data/buildingDetectionService.ts

// Types for building detection
export interface PredictionResult {
  predicted_class: string;
  class_index: number;
  probabilities: number[];
}

// Mock function to simulate building detection
export const detectBuildingEncroachment = async (imageFile: File): Promise<PredictionResult> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // In a real implementation, this would make an actual API call:
  // const formData = new FormData();
  // formData.append('file', imageFile);
  // 
  // const response = await fetch('/predict', {
  //   method: 'POST',
  //   body: formData
  // });
  // 
  // if (!response.ok) {
  //   throw new Error('Failed to analyze image');
  // }
  // 
  // return await response.json();
  
  // Mock response based on file name (for demo purposes)
  const fileName = imageFile.name.toLowerCase();
  
  if (fileName.includes('high')) {
    return {
      predicted_class: 'High Risk',
      class_index: 0,
      probabilities: [0.85, 0.10, 0.05]
    };
  } else if (fileName.includes('medium')) {
    return {
      predicted_class: 'Medium Risk',
      class_index: 1,
      probabilities: [0.10, 0.75, 0.15]
    };
  } else {
    return {
      predicted_class: 'Low Risk',
      class_index: 2,
      probabilities: [0.05, 0.15, 0.80]
    };
  }
};

// In a real implementation, you would replace the above mock with this actual API call:
export const detectBuildingEncroachmentAPI = async (imageFile: File): Promise<PredictionResult> => {
  const formData = new FormData();
  formData.append('file', imageFile);
  
  // Use the proxy configured in vite.config.ts
  const response = await fetch('/predict', {
    method: 'POST',
    body: formData
  });
  
  if (!response.ok) {
    throw new Error('Failed to analyze image');
  }
  
  return await response.json();
};