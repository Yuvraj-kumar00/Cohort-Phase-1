const title = document.querySelector('#title');
const button = document.querySelectorAll('.btn');

button.forEach((btn) => btn.addEventListener('click', function (e) {
    if (e.target.id === 'red') {
        title.style.color = 'red';
    } else if (e.target.id === 'blue') {
        title.style.color = 'blue';
    } else if (e.target.id === 'green') {
        title.style.color = 'green';
    } else if (e.target.id === 'purple') {
        title.style.color = 'purple';
    } else if (e.target.id === 'reset') {
        title.style.color = '#212121';
    }
}))
