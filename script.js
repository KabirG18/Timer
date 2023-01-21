
const timerNum = prompt("write a number");



for (var i=timerNum; i >= 0;i--){
   setTimeout('setV('+i+',"Out")',1000*(timerNum-i));
}



function setV(c,t){
  document.getElementById("timer").innerHTML = c;
  if (c === 0) {
    document.getElementById("timer").innerHTML = "Time Out";
  }
}

const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
   const html = document.querySelector('html')
   if (html.classList.contains('dark')) {
       html.classList.remove('dark')
       e.target.innerHTML = 'Dark mode'
       document.getElementById("timer").style.color = 'black';
   } else {
       html.classList.add('dark')
       document.getElementById("timer").style.color = 'white';
       e.target.innerHTML = 'Light mode'
   }
})
