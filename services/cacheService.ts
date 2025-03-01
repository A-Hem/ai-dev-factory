export class CacheService {
  private cache: Map<string, any>;

  constructor() {
    this.cache = new Map();
  }

  /**
   * Set a value in the cache.
   * @param key - The key to associate with the value.
   * @param value - The value to cache.
   */
  set(key: string, value: any) {
    this.cache.set(key, value);
  }

  /**
   * Get a value from the cache.
   * @param key - The key associated with the value.
   * @returns The cached value, or undefined if the key does not exist.
   */
  get(key: string): any {
    return this.cache.get(key);
  }

  /**
   * Check if a key exists in the cache.
   * @param key - The key to check.
   * @returns True if the key exists, false otherwise.
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }
}
