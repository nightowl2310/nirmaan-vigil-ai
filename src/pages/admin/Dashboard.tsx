// src/pages/admin/Dashboard.tsx
import { useState } from 'react';
import MapPage from './MapPage';
import BuildingDetector from '@/components/BuildingDetector';
import { MapPin, Image as ImageIcon, BarChart3 } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'map' | 'detector' | 'analytics'>('map');

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Nirmaan Vigil AI</h1>
            </div>
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('map')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === 'map'
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Map View
              </button>
              <button
                onClick={() => setActiveTab('detector')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === 'detector'
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Building Detector
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === 'analytics'
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {activeTab === 'map' && <MapPage />}
        {activeTab === 'detector' && (
          <div className="p-6 overflow-auto h-full">
            <BuildingDetector />
          </div>
        )}
        {activeTab === 'analytics' && (
          <div className="p-6 overflow-auto h-full">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics Dashboard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow">
                  <div className="flex items-center">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">High Risk Zones</p>
                      <p className="text-2xl font-semibold text-gray-900">24</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Medium Risk Zones</p>
                      <p className="text-2xl font-semibold text-gray-900">42</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Low Risk Zones</p>
                      <p className="text-2xl font-semibold text-gray-900">86</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Risk Distribution</h3>
                <div className="h-64 flex items-end space-x-2">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full bg-gray-200 rounded-t-lg" style={{ height: '200px' }}>
                      <div className="w-full bg-red-500 rounded-t-lg" style={{ height: '60%' }}></div>
                    </div>
                    <span className="mt-2 text-sm text-gray-600">High Risk</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full bg-gray-200 rounded-t-lg" style={{ height: '200px' }}>
                      <div className="w-full bg-yellow-500 rounded-t-lg" style={{ height: '40%' }}></div>
                    </div>
                    <span className="mt-2 text-sm text-gray-600">Medium Risk</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full bg-gray-200 rounded-t-lg" style={{ height: '200px' }}>
                      <div className="w-full bg-green-500 rounded-t-lg" style={{ height: '80%' }}></div>
                    </div>
                    <span className="mt-2 text-sm text-gray-600">Low Risk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}