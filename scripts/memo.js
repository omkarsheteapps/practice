function memo(func, resolver = (...args) => args.join('_')) {
    let cache = new Map();
    return function(...args) {
      const cacheKey = resolver(...args);
      if(cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }
      
      let result = func.apply(this, args);
      cache.set(cacheKey, result);
      return result;
    }
  }