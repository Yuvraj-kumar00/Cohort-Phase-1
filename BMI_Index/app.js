const standardHeight = document.querySelector('#standard-height-value');
const standardHeightInches = document.querySelector('#standard-height-inches-value');
const standardWeight = document.querySelector('#standard-weight-value');

const resultBtn = document.querySelector('.bmi-result-btn')

console.log(resultBtn);

resultBtn.addEventListener('click', function () {
    const strToNumHeightInches = Number(standardHeightInches.value)
    const strToNumHeight = Number(standardHeight.value)*12 + strToNumHeightInches;
    const strToNumWeight = Number(standardWeight.value)
   
    if (!strToNumHeight || !strToNumWeight) {
        alert("Please Enter Number Value!!!")
    } else {
        const bmiResult =Math.round(703*(strToNumWeight/(strToNumHeight*strToNumHeight)));

        const result = document.querySelector('.result');
        let bmiCategory;
        
        if (bmiResult < 18.5) {
            bmiCategory = "Underweight";
        } else if (bmiResult < 24.9) {
            bmiCategory = "Healthy";
        } else if (bmiResult < 29.9) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obesity";
        };

         result.innerHTML = `BMI = ${bmiResult} kg/m<sup>2</sup> (<span class="bmi-category">${bmiCategory}</span>)`
    }
    
})
