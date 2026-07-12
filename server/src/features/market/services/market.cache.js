class MarketCache {
  constructor() {
    this.cache = new Map();
  }

  get(key) {
    const value = this.cache.get(key);

    if (!value) return null;

    if (Date.now() > value.expireAt) {
      this.cache.delete(key);
      return null;
    }

    return value.data;
  }

  set(key, data, ttl = 30000) {
    this.cache.set(key, {
      data,
      expireAt: Date.now() + ttl,
    });
  }

  clear(key) {
    this.cache.delete(key);
  }

  clearAll() {
    this.cache.clear();
  }
}

export default new MarketCache();
