"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the filterValues method on Object.prototype
Object.defineProperty(Object.prototype, 'filterValues', {
    value: function (filterFn, transformFn) {
        const result = {};
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                const value = this[key];
                if (filterFn(value, key)) {
                    result[key] = transformFn ? transformFn(value, key) : value;
                }
            }
        }
        return result;
    },
    writable: false, // Prevent overwriting
    enumerable: false, // Hide from for-in loops
    configurable: true, // Allow deletion if needed
});
