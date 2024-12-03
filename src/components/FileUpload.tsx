import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File } from 'lucide-react';

export default function FileUpload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.pdf'],
      'model/*': ['.stl', '.obj', '.step', '.iges'],
    },
    multiple: false,
  });

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          {isDragActive ? (
            'Drop the file here...'
          ) : (
            'Drag and drop your file here, or click to select'
          )}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Supported formats: STL, OBJ, STEP, IGES, PNG, JPG, PDF
        </p>
      </div>
    </div>
  );
}