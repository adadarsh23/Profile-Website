import { WebGLRenderer, InstancedBufferAttribute } from 'three';

// Provide fallback implementations
export class WebGPURenderer extends WebGLRenderer {
  constructor(options = {}) {
    super(options);
    console.warn('WebGPU not supported - falling back to WebGL');
  }
}

export class StorageInstancedBufferAttribute extends InstancedBufferAttribute {
  constructor(...args) {
    super(...args);
    console.warn('StorageInstancedBufferAttribute not supported - falling back to InstancedBufferAttribute');
  }
}