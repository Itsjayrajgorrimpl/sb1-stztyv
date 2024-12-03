export interface Material {
  name: string;
  density: number; // g/cm³
  description: string;
}

export interface ModelAnalysis {
  volume: number; // cm³
  surfaceArea: number; // cm²
  weight: number; // g
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  material: Material;
}

export interface Project {
  id: string;
  name: string;
  createdAt: Date;
  modelUrl?: string;
  analysis?: ModelAnalysis;
  originalFormat: '2d' | '3d';
  status: 'processing' | 'completed' | 'error';
}