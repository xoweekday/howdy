const users = [];

let characters = [
  'Snow White',
  'Snoopy',
  'Scooby Doo',
  'John Wayne',
  'Anne Hathaway',
  'Duke Ellington',
  'Madonna',
  'Superman',
  'Batman',
  'Robin',
  'George Washington',
  'Abraham Lincoln',
  'Thomas Edison',
  'Benjamin Franklin',
  'Brittany Spears',
  'Cinderella',
  'Sleeping Beauty',
  'Billy Joel',
  'Albert Einstein',
  'Richard Nixon',
  'Arnold Schwarzenegger',
  'Dora the Explorer',
  'Elmo',
  'Howard Stern',
  'Donald Trump',
  'Rosie O’Donnell',
  'Oprah Winfrey',
  'Helen of Troy',
  'Helen Keller',
  'Cleopatra',
  'Queen Elizabeth',
  'Demi Moore',
  'Angelina Jolie',
  'Bill Clinton',
  'Hillary Clinton',
  'George Clooney',
  'Rachael Ray',
  'Martha Stewart',
  'Magic Johnson',
  'Dennis Miller',
  'Michael Jackson',
  'Brad Pitt',
  'John Lennon',
  'Elvis',
  'Tom Sawyer',
  'Napoleon',
  'Cleopatra',
  'Joan of Arc',
  'SpongeBob',
  'Ellen DeGeneres',
  'Simon Cowell',
  'George Bush'
];

const getRandomCharacter = (characters) => {
  let index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

const addUser = ({ id, name, room }) => {
  const user = { id, name, room };
  //Add a random character alias for gaming purposes
  user.character = getRandomCharacter(characters);
  users.push(user);
  return user;
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1){
    return users.splice(index, 1)[0];
  }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
