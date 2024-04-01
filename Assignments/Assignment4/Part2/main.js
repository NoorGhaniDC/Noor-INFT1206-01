/*
	Name: Noor Ghani
	File: main.js
	Date:  01 April 2024
	An image gallery.
	*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg","pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const alts = {
    'pic1.jpg' : 'An Eye',
    'pic2.jpg' : 'A Rock',
    'pic3.jpg' : 'Flowers',
    'pic4.jpg' : 'Hieroglyphics',
    'pic5.jpg' : 'Moth'

}

/* Declaring the alternative text for each image file */


/* Looping through images */
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e =>{
        displayedImage.src = e.target.src;
        displayedImage.src = e.target.alt;
    });
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
