const buttons = document.querySelectorAll('button');
let input = document.querySelector('#input-box');
let str = "";
buttons.forEach((allBtn) => {
    allBtn.addEventListener('click', function (e) {
        if (e.target.innerText === "AC") {
            str = "";
           
        } else if (e.target.innerText === "x") {
            let newStr = str.split('');
            str = newStr.splice(0,newStr.length-1).join('')
            
        } else if (e.target.innerText === "=") {
            let result = eval(str);
            str = String(result);
           
        } else {
            str += e.target.innerText;
        }

        input.value = str;
    })
})