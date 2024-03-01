const itemsAnimation = document.querySelectorAll('.itemAnimation')

window.addEventListener('scroll', upItems)

function upItems() {
    itemsAnimation.forEach(item => {
        let itemContainer = item.getBoundingClientRect().top
        let triggerAnimation = window.innerHeight / 5 * 4

        if (itemContainer < triggerAnimation) {
            item.classList.add('showAnimation')
        }
    })
}

// Função da galeria

let photos = document.querySelectorAll('.photos')
const galleryBackground = document.querySelector('.gallery-full-background')
const backgroundImg = document.querySelector('#gallery-img')
const bodyOverflow = document.querySelector('.body-overflow-off')
const closeImgBackground = document.querySelector('#close-gallery-img')

photos.forEach(function (photo, index) {
    photo.addEventListener('click', function () {
        openPhoto(photo, index)
    })
})

function openPhoto(photo, index) {
    switch (index) {
        case 0:
            backgroundImg.src = '../images/work-1.jpg'
            galleryBackground.classList.add('openFullImg')
            bodyOverflow.classList.add('openBodyFullImg')
            break
        case 1:
            backgroundImg.src = '../images/work-2.jpg'
            galleryBackground.classList.add('openFullImg')
            bodyOverflow.classList.add('openBodyFullImg')
            break
        case 2:
            backgroundImg.src = '../images/work-3.jpg'
            galleryBackground.classList.add('openFullImg')
            bodyOverflow.classList.add('openBodyFullImg')
            break
        case 3:
            backgroundImg.src = '../images/work-4.jpg'
            galleryBackground.classList.add('openFullImg')
            bodyOverflow.classList.add('openBodyFullImg')
            break
    }
}

closeImgBackground.addEventListener('click', () => {
    galleryBackground.classList.remove('openFullImg')
    bodyOverflow.classList.remove('openBodyFullImg')
})