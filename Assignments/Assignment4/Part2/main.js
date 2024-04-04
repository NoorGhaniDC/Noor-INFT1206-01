/*<
	Name: Noor Ghani
	File: index.html
	Date: 04 April 2024
	An Image Gallery.
	*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg'
];

/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg': 'An eye.',
    'pic2.jpg': 'A painting',
    'pic3.jpg': 'A bed of flowers',
    'pic4.jpg': 'Egyptian drawnings',
    'pic5.jpg': 'A moth'
};

/* Looping through images */
function handleImageClick({target}){
    displayedImage.setAttribute('src', target.getAttribute('src'));
    displayedImage.setAttribute('alt', target.getAttribute('alt'));
}

imageFilenames.forEach((imageName) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageName}`);
    newImage.setAttribute('alt', altText[imageName]);
    thumbBar.appendChild(newImage);
});

/* Wiring up the Darken/Lighten button */
function handleButtonClick(){
    let currentClass = btn.getAttribute('class');
    if (currentClass === 'dark'){
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.setAttribute('class', 'light');
    } else {
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.setAttribute('class', 'dark');
    }
}

btn.addEventListener('click', handleButtonClick);