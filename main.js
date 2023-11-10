let Top = document.querySelector('#to-top ')
let nowDate = document.getElementById('date')
let alImg = document.querySelectorAll("img")

function optmizeImages() {
    for (let i = 0; i < alImg.length; i++) {
        alImg[i].setAttribute('loading', 'lazy')
    }
}

optmizeImages();
let date = new Date()
setInterval(() => {
    let dateToDay = `${date.getDate() > 10 ? `0${date.getDate()}` : date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const dateNow = new Date();
    nowDate.textContent = `${dateToDay}`
    let minutes = dateNow.getMinutes();
    let hours = `${dateNow.getHours() < 10 ? `0${dateNow.getHours()}` : dateNow.getHours()} `;
    clock.textContent = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${dateNow.getHours() < 12 ? 'AM' : "PM"}`
}, 1000);
window.onscroll = function () {
    if (this.scrollY >= 400) {
        Top.classList.add('show')
    }
    else {
        Top.classList.remove('show')
    }
}

function setToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
}
Top.addEventListener('click', setToTop)