process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  console.log(`Your name is: ${name}`);
});

// When the user exits (CTRL+D)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

