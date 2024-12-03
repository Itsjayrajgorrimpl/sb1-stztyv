import React from 'react';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import ModelViewer from './components/ModelViewer';
import AnalysisPanel from './components/AnalysisPanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <FileUpload />
              <ModelViewer />
            </div>
            
            <div>
              <AnalysisPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;