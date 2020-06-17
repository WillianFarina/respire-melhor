const container = document.querySelector('.container');
const text = document.querySelector('#text');
const start = document.querySelector('.top button');
const pointer = document.querySelector('.pointer-container');

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

// start.addEventListener('click', () => {
//   if(pointer.classList.contains('active')) {
//     pointer.classList.remove('active')
//     start.innerHTML = 'Iniciar'
//     text.innerHTML = 'Relaxe!'
//   } else {
//     start.innerHTML = 'Parar'
//     pointer.classList.add('active')
//     breatheAnimation()
//   }
// })

breatheAnimation();

function breatheAnimation() {
  // if (pointer.classList.contains('active')) {
    text.innerHTML = 'Inspire!'
    container.className = 'container grow'

    setTimeout(() => {
      text.innerText = 'Segure'

      setTimeout(() => {
        text.innerText = 'Expire!'
        container.className = 'container shrink'
      }, holdTime)

    }, breatheTime)

    setInterval(breatheAnimation, totalTime)
  // }
  
}
