function renderPhotos(data) {
  const picturesContainer = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const fragmentOfPhotos = document.createDocumentFragment();

  data.forEach((item) => {
    const photoElement = template.cloneNode(true);
    photoElement.querySelector('.picture__img').src = item.url;
    photoElement.querySelector('.picture__likes').textContent = item.likes;
    photoElement.querySelector('.picture__comments').textContent = item.comments.length;
    fragmentOfPhotos.appendChild(photoElement);
  });
  picturesContainer.appendChild(fragmentOfPhotos);

}

export { renderPhotos };
