const weightSlider :HTMLInputElement = document.querySelector('.input-weight');
const weightValueElement :HTMLElement = document.querySelector('.display-weight');
const heightSlider :HTMLInputElement = document.querySelector('.input-height');
const heightValueElement :HTMLElement = document.querySelector('.display-height');
const weightValue :string = weightSlider.value;
const heightValue :string = heightSlider.value;

weightValueElement.textContent = weightValue;
heightValueElement.textContent = heightValue;

const displayValues = () :void => {
    weightSlider.addEventListener('input', () :void => {
        weightValueElement.textContent = weightSlider.value;
    })

    heightSlider.addEventListener('input', () :void => {
        heightValueElement.textContent = heightSlider.value;
    })
}


document.querySelector('button').onclick = function () :void {
    let weight :number = parseInt(weightSlider.value);
    let height :number = parseInt(heightSlider.value) / 100;
    let imc :number = (weight)/Math.pow(height, 2);
    let imcRound :string = imc.toFixed(1);

    let imcOutput :HTMLElement = document.querySelector('.imc');

    imcOutput.textContent = imcRound.toString();
}

displayValues();