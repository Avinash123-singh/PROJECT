const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid number ${height}`;

  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give us valid weight ${weight}`;
  }
  else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);


    let value = '';
    if (BMI < 18.5) {
      value = 'Underweight';
    } else if (BMI >= 18.5 && BMI < 25) {
      value = 'Normal weight';
    } else if (BMI >= 25 && BMI < 30) {
      value = 'Overweight';
    } else {
        value = 'Obese';
      }

   
    //show the result

    results.innerHTML = `<span>${BMI}</span><br><span>Weight category: ${value}</span>`;
    

  }
  
});




