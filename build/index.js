const weightSlider = document.querySelector('.input-weight');
const weightValueElement = document.querySelector('.display-weight');
const heightSlider = document.querySelector('.input-height');
const heightValueElement = document.querySelector('.display-height');
const weightValue = weightSlider.value;
const heightValue = heightSlider.value;
weightValueElement.textContent = weightValue;
heightValueElement.textContent = heightValue;
const displayValues = () => {
    weightSlider.addEventListener('input', () => {
        weightValueElement.textContent = weightSlider.value;
    });
    heightSlider.addEventListener('input', () => {
        heightValueElement.textContent = heightSlider.value;
    });
};
document.querySelector('button').onclick = function () {
    let weight = parseInt(weightSlider.value);
    let height = parseInt(heightSlider.value) / 100;
    let imc = (weight) / Math.pow(height, 2);
    let imcRound = imc.toFixed(1);
    let imcOutput = document.querySelector('.imc');
    let imcMessage = document.querySelector('.imc-message');
    imcMessage.setAttribute('style', 'display: flex; justify-content: center');
    if (imc < 18.5) {
        imcOutput.classList.add('imc-blue');
        imcOutput.classList.remove('imc-yellow', 'imc-red', 'imc-green');
    }
    else if (imc > 18.5 && imc < 24.5) {
        imcOutput.classList.add('imc-green');
        imcOutput.classList.remove('imc-blue', 'imc-yellow', 'imc-red');
    }
    else if (imc > 24.5 && imc < 29.9) {
        imcOutput.classList.add('imc-yellow');
        imcOutput.classList.remove('imc-green', 'imc-red', 'imc-blue');
    }
    else if (imc > 29.9 && imc < 1000) {
        imcOutput.classList.add('imc-red');
        imcOutput.classList.remove('imc-green', 'imc-yellow', 'imc-blue');
    }
    imcOutput.textContent = imcRound.toString();
};
displayValues();
//# sourceMappingURL=index.js.map