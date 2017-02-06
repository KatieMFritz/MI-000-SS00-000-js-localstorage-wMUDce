var toggleButton = document.getElementById('toggle-theme')
var currentClass = document.body.getAttribute('class')
var theme = ''

var loadTheme = function () {
  theme = window.localStorage.getItem('theme')
  if (theme !== null) {
    document.body.setAttribute('class', theme)
  } else {
    document.body.setAttribute('class', 'day-theme')
    currentClass = 'day-theme'
  }
}

var toggleTheme = function () {
  if (currentClass.includes('day')) {
    theme = 'night-theme'
    currentClass = 'night-theme'
  } else {
    theme = 'day-theme'
    currentClass = 'day-theme'
  }
  window.localStorage.setItem('theme', theme)
  document.body.setAttribute('class', currentClass)
}

loadTheme()
toggleButton.addEventListener('click', toggleTheme)
