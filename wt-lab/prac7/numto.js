// Get all command line arguments after the script name
const inputs = process.argv.slice(2);

if (inputs.length === 0) {
  console.log("Usage: node convert.js <number1> <number2> ...");
  process.exit(1);
}

inputs.forEach((input) => {
  const num = Number(input);

  if (isNaN(num)) {
    console.log(`'${input}' is not a valid number.`);
    return;
  }

  console.log(`\nNumber: ${num}`);
  console.log(`  Hexadecimal: ${num.toString(16)}`);
  console.log(`  Octal:       ${num.toString(8)}`);
  console.log(`  Binary:      ${num.toString(2)}`);
});

console.log(); // just for a clean ending
