// Get all command line arguments after the script name
const inputs = process.argv.slice(2);

if (inputs.length === 0) {
  console.log("Usage: node numto.js <number1> <number2> ...");
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
/*
Sample Output:
PS C:\Users\LENOVO\Desktop\> node change.js 10 34 56 72 12

Number: 10
  Hexadecimal: a
  Octal:       12
  Binary:      1010

Number: 34
  Hexadecimal: 22
  Octal:       42
  Binary:      100010

Number: 56
  Hexadecimal: 38
  Octal:       70
  Binary:      111000

Number: 72
  Hexadecimal: 48
  Octal:       110
  Binary:      1001000

Number: 12
  Hexadecimal: c
  Octal:       14
  Binary:      1100
*/
