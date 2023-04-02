import { getLoader } from './loader.js';

// const uploadForm = document.querySelector('.upload-form');
const file = document.querySelector('#upload-image');
const showImagesBtn = document.querySelector('.upload-btn');
const output = document.querySelector('#output');

//Загрузкa изображений в localStorage на стороне клиента
function uploadImage(event) {
  const reader = new FileReader();
  const name = event.target.files[0].name;

  reader.addEventListener('load', function () {
    if (this.result && localStorage) {
      window.localStorage.setItem(name, this.result);
    } else {
      alert();
    }
  });
  reader.readAsDataURL(event.target.files[0]);
}

function deleteImage(elem) {
  window.localStorage.removeItem(elem);
}

//Выгрузка изображений из localStorage. Вывод на экран
function showImages() {
  const div = document.querySelector('.file-wrapper');

  if (output.contains(div)) {
    output.append(div);
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      const result = window.localStorage.getItem(window.localStorage.key(i));
      const div = document.createElement('div');
      const image = new Image();
      const deleteBtn = document.createElement('button');

      deleteBtn.textContent = 'X';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', event => {
        deleteImage(`${window.localStorage.key(i)}`);
        event.target.parentElement.remove();
      });

      div.classList.add('file-wrapper');
      div.append(image);
      div.append(deleteBtn);

      image.src = result;
      image.setAttribute('class', 'img');
      image.setAttribute('size', '50');

      output.append(div);
    }

    showImagesBtn.classList.add('disabled');
  }
}

showImages();

file.addEventListener('change', event => {
  uploadImage(event);
  showImagesBtn.classList.remove('disabled');
});

showImagesBtn.addEventListener('change', event => {
  event.preventDefault();
  showImages();
  // getLoader(uploadForm);
  // showImages();
  // showImagesBtn.setAttribute('disabled', true);
});
