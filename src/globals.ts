declare global {
    interface Object {
      /**
       * Filters the object's values based on a filter function and transforms them if a transform function is provided.
       * @param filterFn - A function that determines whether to include a value.
       * @param transformFn - An optional function to transform the value.
       * @returns A new object with filtered and transformed values.
       */
      filterValues<K extends string, V, R>(
        filterFn: (value: V, key: K) => boolean,
        transformFn?: (value: V, key: K) => R
      ): Record<K, R>;
    }
  }
  
  // Define the filterValues method on Object.prototype
  Object.defineProperty(Object.prototype, 'filterValues', {
    value: function <K extends string, V, R>(
      this: Record<K, V>,
      filterFn: (value: V, key: K) => boolean,
      transformFn?: (value: V, key: K) => R
    ): Record<K, R> {
      const result: Partial<Record<K, R>> = {};
      for (const key in this) {
        if (Object.prototype.hasOwnProperty.call(this, key)) {
          const value = this[key];
          if (filterFn(value, key)) {
            result[key] = transformFn ? transformFn(value, key) : (value as unknown as R);
          }
        }
      }
      return result as Record<K, R>;
    },
    writable: false, // Prevent overwriting
    enumerable: false, // Hide from for-in loops
    configurable: true, // Allow deletion if needed
  });
  
  export {};
  