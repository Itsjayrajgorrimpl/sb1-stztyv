import React from 'react';
import { Scale, Box, Weight } from 'lucide-react';
import { materials } from '../data/materials';

export default function AnalysisPanel() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Model Analysis</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Material</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {materials.map((material) => (
              <option key={material.name} value={material.name}>
                {material.name} - {material.description}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Box className="h-5 w-5 text-indigo-600" />
              <span className="ml-2 text-sm font-medium text-gray-500">Dimensions</span>
            </div>
            <div className="mt-2 text-lg font-semibold">
              100 x 50 x 25 mm
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Scale className="h-5 w-5 text-indigo-600" />
              <span className="ml-2 text-sm font-medium text-gray-500">Volume</span>
            </div>
            <div className="mt-2 text-lg font-semibold">
              125 cm³
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Weight className="h-5 w-5 text-indigo-600" />
              <span className="ml-2 text-sm font-medium text-gray-500">Weight</span>
            </div>
            <div className="mt-2 text-lg font-semibold">
              130g
            </div>
          </div>
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Generate Report
        </button>
      </div>
    </div>
  );
}