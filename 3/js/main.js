// eslint-disable-next-line no-unused-vars
const names = [
  'Алексей',
  'Евгения',
  'Татьяна',
  'Александр',
  'Семен',
  'Ксения',
  'Валерий',
  'Таисия',
  'Константин',
  'Михаил',
  'Денис'
];

// eslint-disable-next-line no-unused-vars
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function getRandomIntInclusive(min, max) {
  if (min > max) {
    throw new Error('ошибка!');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

checkCommentLength(5, 13);

function checkCommentLength(string, maxLength) {
  return string.length <= maxLength;
}

// const photo = {
//   id: getRandomIntInclusive(1, 25),
//   description: 'природа',
//   likes: getRandomIntInclusive(15, 200),
//   url: `photos/${getRandomIntInclusive(1, 25)}`,
// };

// console.log(photo);

function getRandomMessage() {
  return message[getRandomIntInclusive(0, message.length - 1)];
}

function getComment(commentId) {
  return {
    id: commentId,
    avatar: `img/avatar${getRandomIntInclusive(1, 6)}.svg`,
    message: `${getRandomMessage()} ${getRandomMessage()}`,
    name: names[getRandomIntInclusive(0, names.length - 1)],
  };
}

function getAllComments() {
  const comments = [];

  for (let i = 0; i < 25; i++) {
    comments.push(getComment(i));
  }

  return comments;
}

// console.log(names.length);
console.log(getAllComments());


