import { MESSAGES, NAMES } from './consts.js';

function getRandomIntInclusive(min, max) {
  if (min > max) {
    throw new Error('ошибка!');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
function getRandomMessage() {
  return MESSAGES[getRandomIntInclusive(0, MESSAGES.length - 1)];
}

let totalCommentsCount = 1;

function getComment() {
  return {
    id: totalCommentsCount++,
    avatar: `img/avatar${getRandomIntInclusive(1, 6)}.svg`,
    message: `${getRandomMessage()} ${getRandomMessage()}`,
    name: NAMES[getRandomIntInclusive(0, NAMES.length - 1)]
  };
}

function generateComments() {
  const comments = [];
  const commentsCount = getRandomIntInclusive(1, 5);

  for (let i = 0; i < commentsCount; i++) {
    comments.push(getComment());
  }

  return comments;
}

function generatePhotoDescription(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фото: ${id}`,
    likes: getRandomIntInclusive(15, 200),
    comments: generateComments(id)
  };
}

function getPhotoDescriptions() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push(generatePhotoDescription(i));
  }

  return photos;
}

export { getRandomMessage, getComment, generateComments, generatePhotoDescription, getPhotoDescriptions };
