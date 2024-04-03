//generate a random color

const RandomColor = function () {
    const hex = '123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  //console.log(Math.floor(Math.random() * 16));
  
  //console.log(RandomColor());
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgcolor, 2000);
    }
  
    function changeBgcolor() {
      document.body.style.backgroundColor = RandomColor();
    }
  };
  
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  