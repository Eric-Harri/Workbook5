"use strict";

let imageFiles = [
  { path: "https://loremflickr.com/320/240/dog?lock=6", name: "Husky" },
  { path: "https://loremflickr.com/320/240/dog?lock=3", name: "Pitbull" },
  {
    path: "https://loremflickr.com/320/240/dog?lock=4",
    name: "German Shepherd",
  },
];

const dogList = document.getElementById("dogList");
const imagesDiv = document.getElementById("imagesDiv");

function loadDogList() {
  imageFiles.forEach((imageFile) => {
    let newOption = new Option(imageFile.name, imageFile.name);
    dogList.appendChild(newOption);
  });
}

function addImage() {
  // throw new Error('fail');
  let selectValue = dogList.value;

  let imageFile = imageFiles.find((f) => f.name === selectValue);
  let img = document.createElement("img");
  img.src = imageFile.path;
  img.alt = imageFile.name;
  imagesDiv.appendChild(img);
}

function clearImage() {
  //  imagesDiv.innerHTML = '';
  let images = document.querySelectorAll("#imagesDiv img");

  images.forEach((img) => {
    imagesDiv.removeChild(img);
  });
}

window.onload = () => {
  loadDogList();
  const addImageButton = document.getElementById("addImageButton");
  addImageButton.onclick = addImage;

  const clearImageButton = document.getElementById("clearImageButton");
  clearImageButton.onclick = clearImage;
};
