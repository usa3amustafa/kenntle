const logo = document.querySelector('.logo')
const searchBox = document.querySelector('.search-box')
const starWhite = document.querySelector('.star-white')
const starYellow = document.querySelector('.star-yellow')
const mainText = document.querySelector('.main-text')
const mainBtns = document.querySelectorAll('.main-btn')

logo.addEventListener('click', function () {
  logo.classList.toggle('logo-large')
  searchBox.classList.toggle('op-0')
  mainText.classList.toggle('op-0')
})

mainText.addEventListener('mouseenter', function () {
  starWhite.classList.add('star-hidden')
  starYellow.classList.remove('star-hidden')
})
mainText.addEventListener('mouseleave', function () {
  starWhite.classList.remove('star-hidden')
  starYellow.classList.add('star-hidden')
})

mainBtns.forEach(mainBtn =>
  mainBtn.addEventListener('click', function () {
    mainBtn.classList.toggle('main-btn-down')
  })
)
