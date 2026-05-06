# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in? 


## Introduction

TypeScript-এ Generics একটি শক্তিশালী ফিচার যা আমাদের নমনীয় এবং পুনর্ব্যবহারযোগ্য কোড লিখতে সাহায্য করে। Generics ব্যবহার করে আমরা এমন ফাংশন এবং কম্পোনেন্ট তৈরি করতে পারি যা যেকোনো ধরনের ডেটা নিয়ে কাজ করতে পারে, কিন্তু তবুও type safety বজায় রাখে। 

## Generics কি?

Generics হলো একটি উপায় যেখানে আমরা type parameters ব্যবহার করে function বা class তৈরি করতে পারি। এটি আমাদের runtime এ type decide করার সুবিধা দেয়, কিন্তু compile time-এ type checking নিশ্চিত করে।

সহজ ভাবে বলতে গেলে, Generics হলো type এর জন্য একটি "placeholder" যা আমরা পরে define করতে পারি।

##  Example 01: সাধারণ Generic Function

```typescript
// Generic ছাড়া - শুধু string
function getFirstString(arr: string[]): string {
  return arr[0];
}

// Generic ছাড়া - শুধু number
function getFirstNumber(arr: number[]): number {
  return arr[0];
}

// এটি অনেক repetitive এবং maintain করা কঠিন
```

Generic ব্যবহার করলে এটি অনেক সহজ হয়:

```typescript
// Generic function - যেকোনো type এর জন্য কাজ করে
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// বিভিন্ন ধরনের data নিয়ে ব্যবহার 
const firstString = getFirst(["hello", "world"]); // Type: string
const firstNumber = getFirst([1, 2, 3]); // Type: number
const firstBool = getFirst([true, false]); // Type: boolean
```

এখানে `<T>` হলো একটি type variable যা function call করার সময় automatic ভাবে infer হয়ে যায়। TypeScript বুঝে নেয় কি ধরনের data আসছে এবং সেই অনুযায়ী `T` কে set করে।


## Type Safety কিভাবে বজায় থাকে?

Generics এর সবচেয়ে বড় সুবিধা হলো type safety। 

```typescript
function getProperty<T>(obj: T, key: keyof T): any {
  return obj[key];
}

const person = { name: "Ali", age: 25 };
const name = getProperty(person, "name"); // Valid
// const invalid = getProperty(person, "email"); // Error! - email property নাই
```

TypeScript automatically check করে যে আমরা যে property access করছি সেটি object এ আছে কি না।


## Conclusion


Generics হলো TypeScript এর একটি powerful feature :

1. **পুনর্ব্যবহারযোগ্য** কোড লিখতে সাহায্য করে - একবার function লিখে সব ধরনের data type এ ব্যবহার করা যায়
2. **Type safety** বজায় রাখে - compile time এ সব ধরনের type errors ধরা পড়ে




