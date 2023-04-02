import { getLoader } from './loader.js';

const uploadForm = document.querySelector('.upload-form');
const file = document.querySelector('#upload-image');
const uploadBtn = document.querySelector('.upload-btn');
const output = document.querySelector('#output');

uploadBtn.addEventListener('click', e => {
  e.preventDefault();

  getLoader(uploadForm);
  const newImage = document.createElement('img');

  newImage.setAttribute('src', `${URL.createObjectURL(file.files[0])}`);

  output.append(newImage);
});
