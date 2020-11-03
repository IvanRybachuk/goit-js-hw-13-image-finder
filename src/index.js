import template from './template/template.hbs';

import './styles.css';

import api from './api.js';

const buttonLoad = document.querySelector('.button-load');
const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const input = searchForm.query;
const renderPictures = function (data) {
  gallery.insertAdjacentHTML('beforeend', template(data));
};

// dataFunction('dogs')
// .then(result => {
//     renderPictures(result)
// });

let valueQuery = '';

const form = function (e) {
  e.preventDefault();
  if (valueQuery === input.value || input.value === '') {
    return;
  }
  gallery.innerHTML = '';
  valueQuery = input.value;
  api.page = 1;
  api.getData(valueQuery).then(result => {
    renderPictures(result);
  });
};

searchForm.addEventListener('submit', form);

const buttonLoadClick = function (e) {
  api.getData(valueQuery).then(result => {
    renderPictures(result);
    window.scrollTo({
      top: buttonLoad.offsetTop - 1600,
      behavior: 'smooth',
    });
  });
};
buttonLoad.addEventListener('click', buttonLoadClick);
