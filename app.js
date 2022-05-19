const logo = document.querySelector('.logo')

logo.addEventListener('click', function () {
  logo.classList.toggle('logo-large')
})

const starWhite = document.querySelector('.star-white')
const starYellow = document.querySelector('.star-yellow')
const mainText = document.querySelector('.main-text')

mainText.addEventListener('mouseenter', function () {
  starWhite.classList.add('star-hidden')
  starYellow.classList.remove('star-hidden')
})
mainText.addEventListener('mouseleave', function () {
  starWhite.classList.remove('star-hidden')
  starYellow.classList.add('star-hidden')
})

const mainBtns = document.querySelectorAll('.main-btn')

mainBtns.forEach(mainBtn =>
  mainBtn.addEventListener('click', function () {
    mainBtn.classList.toggle('main-btn-down')
  })
)
