import zlib from 'zlib';

export class ContextPreprocessor {
  /**
   * Preprocess context data to remove unnecessary information and optimize it.
   * @param context - The context data to preprocess.
   * @returns The preprocessed context data.
   */
  preprocess(context: any): any {
    // Remove unnecessary information and optimize context data
    // ...preprocessing code...
    return context;
  }

  /**
   * Compress context data to reduce its size.
   * @param context - The context data to compress.
   * @returns The compressed context data as a base64 string.
   */
  compress(context: any): string {
    const jsonString = JSON.stringify(context);
    return zlib.deflateSync(jsonString).toString('base64');
  }

  /**
   * Decompress context data.
   * @param compressedContext - The compressed context data as a base64 string.
   * @returns The decompressed context data.
   */
  decompress(compressedContext: string): any {
    const buffer = Buffer.from(compressedContext, 'base64');
    const jsonString = zlib.inflateSync(buffer).toString();
    return JSON.parse(jsonString);
  }
}
