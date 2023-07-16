const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

const changeColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const newColor = `rgb(${red}, ${green}, ${blue})`;

  if (red <= 100 && green <= 100 && blue <= 100){
    document.body.style.backgroundColor = newColor;
    h2.innerText = `Color Code: ${newColor}`;
    h1.style.color = 'white';
    h2.style.color = 'white';
  }
  else {
    document.body.style.backgroundColor = newColor;
    h2.innerText = `Color Code: ${newColor}`;
    h1.style.color = 'black';
    h2.style.color = 'black';
  }

 
  

};

btn.addEventListener('click', changeColor);
