import { MESSAGES, NAMES } from './consts.js';
import { getRandomIntInclusive } from './util.js';

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

export { getPhotoDescriptions };
