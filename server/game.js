const checkAnswer = (text, character) => {
  let answer = text.toLowerCase().replace(/\?|\.|\,|\!/g, ' ').split(' ');
  let names = character.toLowerCase().split(' ');
  let guessedAnswer = true;

  names.forEach(name => {
    if (answer.includes(name) && guessedAnswer) {
      guessedAnswer = true;
    } else {
      guessedAnswer = false;
    }
  });
  if (guessedAnswer) {
    console.log('you guessed it');
  } else {
    console.log('you guessed wrong');
  }
}

module.exports = { checkAnswer };

