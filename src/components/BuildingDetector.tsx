// src/components/BuildingDetector.tsx
import { useState } from 'react';
import { Upload, Image, AlertCircle } from 'lucide-react';
import { detectBuildingEncroachment } from '@/data/buildingDetectionService';
import { PredictionResult } from '@/data/buildingDetectionService';

export default function BuildingDetector() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setPrediction(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);

    try {
      // Use the actual detection service
      const result = await detectBuildingEncroachment(selectedFile);
      setPrediction(result);
    } catch (err) {
      setError('Failed to analyze the image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Building Encroachment Detector</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Building Image
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {previewUrl ? (
                <img 
                  src={previewUrl} 
                  alt="Preview" 
                  className="max-h-48 rounded-md object-contain"
                />
              ) : (
                <>
                  <Upload className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </>
              )}
            </div>
            <input 
              type="file" 
              className="hidden" 
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>

      {selectedFile && (
        <div className="mb-6">
          <button
            onClick={handleUpload}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                Analyzing...
              </span>
            ) : (
              'Analyze Building'
            )}
          </button>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center text-red-800">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>{error}</span>
          </div>
        </div>
      )}

      {prediction && (
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Analysis Results</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Predicted Risk Level</p>
              <p className={`text-2xl font-bold ${
                prediction.predicted_class === 'High Risk' ? 'text-red-600' :
                prediction.predicted_class === 'Medium Risk' ? 'text-yellow-600' : 'text-green-600'
              }`}>
                {prediction.predicted_class}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Confidence Scores</p>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>High Risk</span>
                    <span>{(prediction.probabilities[0] * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full" 
                      style={{ width: `${prediction.probabilities[0] * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Medium Risk</span>
                    <span>{(prediction.probabilities[1] * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full" 
                      style={{ width: `${prediction.probabilities[1] * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Low Risk</span>
                    <span>{(prediction.probabilities[2] * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${prediction.probabilities[2] * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex items-start">
          <Image className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-blue-800">How it works</h4>
            <p className="text-sm text-blue-700 mt-1">
              Upload an image of a building to analyze it for potential encroachment risks. 
              Our AI model will classify the building into one of three risk categories: 
              High Risk (red), Medium Risk (yellow), or Low Risk (green).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}