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
  
  return guessedAnswer;
}

module.exports = { checkAnswer };

