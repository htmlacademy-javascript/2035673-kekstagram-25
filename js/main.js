function getRandomIntInclusive(min, max) {
  if (min > max) {
    throw new Error('ошибка!');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive(13, 5);
checkCommentLength(5, 13);

function checkCommentLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
