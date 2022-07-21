const num = document.querySelector('num');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const total = document.querySelector('p');
const body = document.querySelector('body');
const error = document.querySelector('span');

error.setAttribute('class', 'div-hide')

error.textContent = 'Введите число';

let counter = 0;

totalSum = function (){
  total.textContent = 'Итого: ' + counter.toFixed(2) + 'р';
}

totalSum();

function sum(){
  error.setAttribute('class', 'div-hide')
  let value = String(input.value)
  value = parseFloat(value.replace(/,/, '.'));
  
  input.value = '';
  if(!(isNaN(value))){
    let li = document.createElement('li');
    let btn3 = document.createElement('button');
    btn3.setAttribute('class', 'btn3')
    let span = document.createElement('span');

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn3);

    btn3.textContent = 'Удалить'
    span.textContent = value + 'р';

    counter += value;

    btn3.addEventListener('click', () => {
      li.remove();
      counter -= value;
      totalSum();
    });
        
    totalSum();
  }else{
    error.setAttribute('class', 'div-show')
  }
  input.focus();
}

function removeLi(){
  while(ul.firstChild){
  ul.removeChild(ul.firstChild);
  }
  counter = 0
  totalSum();
  input.value = '';
  input.focus();
}

btn1.addEventListener('click', sum);
window.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    sum();
  }  
});
// window.addEventListener('keyup', (e) => {console.log('press "' + e.key + '"')})
btn2.addEventListener('click', removeLi);

input.focus();