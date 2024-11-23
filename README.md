# object-utils-m-test

A utility package for filtering and transforming object values.
NPM Package for Test

## Installation

```bash
npm install object-utils-m-test
```

## Usage

### Example 1

```typescript
import "object-utils-m-test";

const obj = { a: 1, b: 2, c: 3 };
const result = obj.filterValues((value: number) => value > 1);
console.log(result); // { b: 2, c: 3 }
```

### Example 2

Using Both Filter and Transform

```typescript
import "object-utils-m-test";
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// Filtering even values and doubling them
const filtered = obj.filterValues(
  (value: number) => value % 2 === 0,
  (value: number) => value * 2
);

console.log(filtered); // Output: { b: 4, d: 8 }
```
