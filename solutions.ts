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


const result = checkType(12); 
console.log(result)