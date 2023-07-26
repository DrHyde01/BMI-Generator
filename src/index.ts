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
    let imcMessage :HTMLElement = document.querySelector('.imc-message');

    imcMessage.setAttribute('style', 'display: flex; justify-content: center');

    if (imc < 18.5) {
        imcOutput.classList.add('imc-blue');
        imcOutput.classList.remove('imc-yellow', 'imc-red', 'imc-green');

    }
    else if (imc > 18.5 && imc < 24.5 ) {
        imcOutput.classList.add('imc-green')
        imcOutput.classList.remove('imc-blue', 'imc-yellow', 'imc-red');
    }
    else if (imc > 24.5 && imc < 29.9) {
        imcOutput.classList.add('imc-yellow');
        imcOutput.classList.remove('imc-green', 'imc-red', 'imc-blue');
    }
    else if (imc > 29.9 && imc < 1000) {
        imcOutput.classList.add('imc-red');
        imcOutput.classList.remove( 'imc-green','imc-yellow', 'imc-blue');
    }


    imcOutput.textContent = imcRound.toString();

}

displayValues();