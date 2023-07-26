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
    imcOutput.textContent = imcRound.toString();
};
displayValues();
//# sourceMappingURL=index.js.map