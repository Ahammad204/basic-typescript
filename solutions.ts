function filterEvenNumbers(numbers: number[]): number[] {
  const evenNumbers: number[] = [];

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}

function reverseString(text: string): string {
  let reverseText: string = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reverseText = reverseText + text[i];
  }

  return reverseText;
}

type stringOrNumber = string | number;

function checkType(input: stringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

function getProperty<T, k extends keyof T>(obj: T, key: k): T[k] {
  return obj[key];
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

function getIntersection(arr1: number[], arr2: number[]): number[] {
  let matchingNumber: number[] = [];
  let flag: boolean = true;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        flag = false;

        for (let k = 0; k < matchingNumber.length; k++) {
          if (matchingNumber[k] === arr1[i]) {
            flag = true;
            break;
          }
        }
        if (flag === false) {
          matchingNumber.push(arr1[i]);
        }
      }
    }
  }

  return matchingNumber;
}


