import { getPhotoDescriptions } from './gen.js';

const renderPhotos = function () {
  const picturesContainer = document.querySelector('.pictures');
  const usersPhotos = getPhotoDescriptions();
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const fragmentOfPhotos = document.createDocumentFragment();

  usersPhotos.forEach((item) => {
    const url = item.url;
    const likes = item.likes;
    const comments = item.comments;

    const photoElement = template.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    fragmentOfPhotos.appendChild(photoElement);
  });
  picturesContainer.appendChild(fragmentOfPhotos);

};

export { renderPhotos };
