import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import { WebGPURenderer, StorageInstancedBufferAttribute } from './webgpu-stub';
import * as tsl from './tsl-stub';

// Create a proxy for THREE to handle WebGPU fallback
const ThreeProxy = new Proxy(THREE, {
  get(target, prop) {
    if (prop === 'WebGPURenderer') {
      return WebGPURenderer;
    }
    return target[prop];
  }
});

// Ensure THREE is available globally in browser environment
if (typeof window !== 'undefined') {
  window.THREE = ThreeProxy;
}

export default ThreeProxy;