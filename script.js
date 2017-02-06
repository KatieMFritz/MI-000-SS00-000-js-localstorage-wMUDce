var toggleButton = document.getElementById('toggle-theme')
var currentClass = document.body.getAttribute('class')

var toggleTheme = function () {
  if (currentClass.includes('night')) {
    document.body.setAttribute('class', 'day-theme')
    currentClass = 'day-theme'
  } else if (currentClass.includes('day')) {
    document.body.setAttribute('class', 'night-theme')
    currentClass = 'night-theme'
  }
}

toggleButton.addEventListener('click', toggleTheme)
