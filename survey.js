
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\`s your name? ', (answer) => {
  rl.question("Where do you live? ", (answer1) => {
    rl.question("Who is your hero? ", (answer2) => {
      rl.question("what\`s your favorite food?",(answer3) => {

        console.log(`Thank you for your valuable feedback: ${answer} lives in ${answer1} and their hero is ${answer2}. ${answer} also enjoys eating ${answer3}`)
  rl.close()
      });
    });
  });
});