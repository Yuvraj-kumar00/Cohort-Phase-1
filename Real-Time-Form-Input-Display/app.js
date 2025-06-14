const names = document.querySelector('#name');
const jobTitle = document.querySelector('#jobTitle');
const age = document.querySelector('#age');
const bio = document.querySelector('#bio');

const previewNameValue = document.querySelector('#preview-name-value');
const previewJobTitleValue = document.querySelector('#preview-job-title-value');
const previewAgeValue = document.querySelector('#preview-age-value');
const previewBioValue = document.querySelector('#preview-bio-value');

names.addEventListener('input', function (e) {
    previewNameValue.innerText = e.target.value;
})
jobTitle.addEventListener('input', function (e) {
    previewJobTitleValue.innerText = e.target.value;
})
age.addEventListener('input', function (e) {
    previewAgeValue.innerText = e.target.value;
})
bio.addEventListener('input', function (e) {
    previewBioValue.innerText = e.target.value;
})