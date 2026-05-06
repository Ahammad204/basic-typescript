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

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

const result = toggleReadStatus(myBook);
console.log(result);
