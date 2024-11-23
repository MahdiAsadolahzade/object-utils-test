declare global {
    interface Object {
        /**
         * Filters the object's values based on a filter function and transforms them if a transform function is provided.
         * @param filterFn - A function that determines whether to include a value.
         * @param transformFn - An optional function to transform the value.
         * @returns A new object with filtered and transformed values.
         */
        filterValues<K extends string, V, R>(filterFn: (value: V, key: K) => boolean, transformFn?: (value: V, key: K) => R): Record<K, R>;
    }
}
export {};
