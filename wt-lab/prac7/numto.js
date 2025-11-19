// convert.js

// Read command line argument
const input = process.argv[2];

if (!input) {
  console.log("Usage: node convert.js <number>");
  process.exit(1);
}

// Convert to number
const num = Number(input);

// Validate input
if (isNaN(num)) {
  console.log("Please enter a valid number.");
  process.exit(1);
}

console.log(`Decimal: ${num}`);
console.log(`Hexadecimal: ${num.toString(16)}`);
console.log(`Octal: ${num.toString(8)}`);
console.log(`Binary: ${num.toString(2)}`);
