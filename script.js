/*  constans */
const nextImage = document.querySelectorAll('.slider-inner .arrows span')[0]
const prevImage = document.querySelectorAll('.slider-inner .arrows span')[1]
const allImages = Array.from(document.querySelectorAll('.slider-inner img'))
let clock = document.querySelector('#clock ');
let topTop = document.querySelector('#to-top ')
let datE = new Date();
let year = datE.getFullYear(),
    day = datE.getDate()
let sec = datE.getSeconds();
const activeImage = allImages.filter((img) => {
    return img.classList.contains('active')
})
let currentImage = allImages.indexOf(...activeImage);
// Functions 

for (let j = 0; j < allImages.length; j++) {
    let span = document.createElement('span')
    document.querySelector('.slider-inner .pagenation').appendChild(span)
}
let pagenations = Array.from(document.querySelectorAll('.slider-inner .pagenation span')).reverse()
pagenations[0].classList.add('active')
nextImage.addEventListener('click', (e) => {
    if (prevImage.classList.contains('disable')) {
        prevImage.classList.remove('disable')
    }
    currentImage++
    if (((allImages.length) - currentImage) == 1) {
        nextImage.classList.add('disable')
    }
    else {
        if (nextImage.classList.contains('active')) {
            nextImage.classList.remove('disable')
        }
    }
    // Removing All Active Classes From Pagenations
    pagenations.forEach(e => {
        e.classList.remove('active')
    })
    // Removing All Active Classes From Images
    allImages.forEach(img => {
        img.classList.remove('active')
    })
    // Add Active Class to Current Pagenation
    pagenations[currentImage].classList.add('active')
    // Add Active Class to Currnet Image
    allImages[currentImage].classList.add('active')
})
if (currentImage == 0) {
    prevImage.classList.add('disable')
}
// prevImage Logic
prevImage.addEventListener('click', () => {
    currentImage--
    if (nextImage.classList.contains('disable')) {
        nextImage.classList.remove('disable')
    }
    if (currentImage == 0) {
        prevImage.classList.add('disable')
    }
    // Removing All Active Classes From Pagenations
    pagenations.forEach(e => {
        e.classList.remove('active')
    })
    // Removing All Active Classes From Images
    allImages.forEach(img => {
        img.classList.remove('active')
    })
    // Add Active Class to Current Pagenation
    pagenations[currentImage].classList.add('active')
    // Add Active Class to Currnet Image
    allImages[currentImage].classList.add('active')
})
window.onscroll = function () {
    if (this.scrollY >= 400) {
        topTop.classList.add('show')
    }
    else {
        topTop.classList.remove('show')
    }
}

function setToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
}
topTop.addEventListener('click', setToTop)