// constants for query selector
var bgColor = document.querySelector('html');
var studentId = document.querySelector('#myStudentId');
var images = document.querySelector('#images');
var customNumber = document.querySelector('#customNumber');
const custColButton = document.querySelector('.custColor');
const randColButton = document.querySelector('.randColor');
var imageSelect = document.querySelector('#imageSelect');
var listFull = false;

// function to change bg color from user input and add student id
function changeCustomColor() {
    studentId.textContent = '1228048'; //displays student Id
    var custNum = parseInt(customNumber.value); //sets custom number to whateverthe user put
    //changes color based off of custom number
    if (custNum < 0 || custNum > 100) {
        bgColor.style.backgroundColor = 'red';
    }
    else if (custNum < 20){
        bgColor.style.backgroundColor = 'green';
    }
    else if (custNum < 40){
        bgColor.style.backgroundColor = 'blue';
    }
    else if (custNum < 60){
        bgColor.style.backgroundColor = 'orange';
    }
    else if (custNum < 80){
        bgColor.style.backgroundColor = 'purple';
    }
    else if(custNum <= 100) {
        bgColor.style.backgroundColor = 'yellow';
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    var randomNum = Math.floor(Math.random() * 101); //generates random number from 0 to 100
    //sets background color based off random number
    if (randomNum < 20){
        bgColor.style.backgroundColor = 'green';
    }
    else if (randomNum < 40){
        bgColor.style.backgroundColor = 'blue';
    }
    else if (randomNum < 60){
        bgColor.style.backgroundColor = 'orange';
    }
    else if (randomNum < 80){
        bgColor.style.backgroundColor = 'purple';
    }
    else if(randomNum <= 100) {
        bgColor.style.backgroundColor = 'yellow';
    }
}

// function to generate options for select list
function addList() {
    if (!listFull){ //checks if list is full so that it doesn't add duplicate values upon a scond click
    var imageList = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg']; //list of the urls for the images

    for (var i = 0; i < imageList.length; i++) {
        var option = document.createElement("option"); // creates option elements to be added to the select element 
        option.text = "Image " + (i + 1); // The text of the option. this is what is displayed in the element
        option.value = imageList[i]; // this sets the value of each option to their respective image url
        imageSelect.appendChild(option);
    }
    listFull = true;
} 
}

// function to change image
function changeImage() {    
    var selectedImage = imageSelect.value; //gets the url for the image that the user selected
    images.src = selectedImage; //displays user selected image
}

// event listeners for on click event of buttons and select
custColButton.addEventListener('click', changeCustomColor);
randColButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);
// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);