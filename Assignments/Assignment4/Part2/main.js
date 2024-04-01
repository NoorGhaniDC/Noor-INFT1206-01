/*
	Name: Noor Ghani
	File: main.js
	Date:  01 April 2024
	An image gallery.
	*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = ocument.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg","pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg' : 'An Eye',
    'pic2.jpg' : 'A Rock',
    'pic3.jpg' : 'Flowers',
    'pic4.jpg' : 'Hieroglyphics',
    'pic5.jpg' : 'Moth'

}

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


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () =>{
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})