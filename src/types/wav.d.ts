declare module 'wav' {
  import { Writable } from 'stream';

  export interface WriterOptions {
    channels?: number;
    sampleRate?: number;
    bitDepth?: number;
    format?: number;
    endianness?: 'LE' | 'BE';
  }

  export class Writer extends Writable {
    constructor(options?: WriterOptions);
  }

  // Add other exports from the 'wav' module if needed
}
