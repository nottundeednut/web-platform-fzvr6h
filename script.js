const btn = document.querySelector('button');
const h2 = document.querySelector('h2');

const changeColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const newColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = newColor;

  h2.innerText = `Color Code: ${newColor}`;
};

btn.addEventListener('click', changeColor);
