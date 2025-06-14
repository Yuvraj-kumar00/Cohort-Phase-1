let reviewMessage = document.querySelector('#review-box');
let userName = document.querySelector('#name-input');
const submitBtn = document.querySelector('.submit');
const reviewContainer = document.querySelector('.right-part');
const allRatings = document.querySelectorAll('.rating-star');
let clickId;
let imgSrc;

submitBtn.addEventListener("click", function () {
    createReviews();
    allRatings.forEach(item => item.src = "empty-star.jpg")
    imgSrc = 'http://192.168.40.67:5500/Review_Collector/empty-star.jpg'
})

function createReviews() {
    const capitalizeUserName = userName.value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
   
    const div1 = document.createElement('div');
    div1.classList.add('review-message-box');
   
    const para1 = document.createElement('p');
    para1.classList.add('avatar-img');
    para1.innerText = `${userName.value[0].toUpperCase()}`
    div1.appendChild(para1);

    const div2 = document.createElement('div');
    div2.classList.add('avatar-name-box');
    div1.appendChild(div2);

    const para2 = document.createElement('p');
    para2.classList.add('avatar-name');
    para2.innerText = `${capitalizeUserName}`
    div2.appendChild(para2);

    const div3 = document.createElement('div');
    div3.classList.add('avatar-rating-box');
    div2.appendChild(div3);

    const div4 = document.createElement('div');
    div4.classList.add('avatar-ratings');
    div4.id = "avatar-ratings";
    div3.appendChild(div4);

    if (clickId === "first" && imgSrc === "http://192.168.40.67:5500/Review_Collector/rating-star.webp") {
        for (let i = 1; i === 1; i++) {
            const image = document.createElement('img');
            image.src = 'rating-star.webp';
            image.classList.add('avatar-rating-icon');
            div4.appendChild(image);
        }
    } else if (clickId === "second" && imgSrc === "http://192.168.40.67:5500/Review_Collector/rating-star.webp") {
        for (let i = 1; i <= 2; i++) {
            const image = document.createElement('img');
            image.src = 'rating-star.webp';
            image.classList.add('avatar-rating-icon');
            div4.appendChild(image)
        }
    } else if (clickId === "third" && imgSrc === "http://192.168.40.67:5500/Review_Collector/rating-star.webp") {
        for (let i = 1; i <= 3; i++) {
            const image = document.createElement('img');
            image.src = 'rating-star.webp';
            image.classList.add('avatar-rating-icon');
            div4.appendChild(image)
        }
    } else if (clickId === "fourth" && imgSrc === "http://192.168.40.67:5500/Review_Collector/rating-star.webp") {
        for (let i = 1; i <= 4; i++) {
            const image = document.createElement('img');
            image.src = 'rating-star.webp';
            image.classList.add('avatar-rating-icon');
            div4.appendChild(image)
        }
    } else if (clickId === "fifth" && imgSrc === "http://192.168.40.67:5500/Review_Collector/rating-star.webp") {
        for (let i = 1; i <= 5; i++) {
            const image = document.createElement('img');
            image.src = 'rating-star.webp';
            image.classList.add('avatar-rating-icon');
            div4.appendChild(image)
        }
    }

    const para3 = document.createElement('p');
    para3.classList.add('review-submit-time');
    para3.innerText = `2 week ago`
    div3.appendChild(para3);

    const para4 = document.createElement('p');
    para4.classList.add('avatar-review');
    para4.innerText = `${reviewMessage.value}`
    div2.appendChild(para4);

    reviewContainer.appendChild(div1);

    reviewMessage.value = "";
    userName.value = "";
}

allRatings.forEach((ratings) => ratings.addEventListener('click', function (e) {

    if (e.target.id === "first") {
        const firstImg = document.querySelector('#first');
        firstImg.src = "rating-star.webp";
        clickId = e.target.id;
        imgSrc = e.target.src;

    } else  if (e.target.id === "second") {
        const firstImg = document.querySelector('#first');
        const secondImg = document.querySelector('#second');
        firstImg.src = "rating-star.webp";
        secondImg.src = "rating-star.webp";
        clickId = e.target.id;
        imgSrc = e.target.src;

    } else  if (e.target.id === "third") {
        const firstImg = document.querySelector('#first');
        const secondImg = document.querySelector('#second');
        const thirdImg = document.querySelector('#third');
        firstImg.src = "rating-star.webp";
        secondImg.src = "rating-star.webp";
        thirdImg.src = "rating-star.webp";
        clickId = e.target.id;
        imgSrc = e.target.src;
       
    } else  if (e.target.id === "fourth") {
        const firstImg = document.querySelector('#first');
        const secondImg = document.querySelector('#second');
        const thirdImg = document.querySelector('#third');
        const fourthImg = document.querySelector('#fourth');
        firstImg.src = "rating-star.webp";
        secondImg.src = "rating-star.webp";
        thirdImg.src = "rating-star.webp";
        fourthImg.src = "rating-star.webp";
        clickId = e.target.id;
        imgSrc = e.target.src;
        
    } else {
        const firstImg = document.querySelector('#first');
        const secondImg = document.querySelector('#second');
        const thirdImg = document.querySelector('#third');
        const fourthImg = document.querySelector('#fourth');
        const fifthImg = document.querySelector('#fifth');
        firstImg.src = "rating-star.webp";
        secondImg.src = "rating-star.webp";
        thirdImg.src = "rating-star.webp";
        fourthImg.src = "rating-star.webp";
        fifthImg.src = "rating-star.webp";
        clickId = "fifth";
        imgSrc = e.target.src;

    }
        
}))
