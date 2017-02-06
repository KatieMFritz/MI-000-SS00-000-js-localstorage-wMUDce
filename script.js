var toggleButton = document.getElementById('toggle-theme')
var theme = ''

var loadTheme = function () {
  // Get the stored value for theme
  theme = window.localStorage.getItem('theme')
  // If theme is set, use that theme
  if (theme !== null) {
    document.body.setAttribute('class', theme)
  // Otherwise, start out with day-theme
  } else {
    document.body.setAttribute('class', 'day-theme')
    theme = 'day-theme'
  }
}

var toggleTheme = function () {
  // If theme is day-theme, set it to night-theme
  if (theme === 'day-theme') {
    theme = 'night-theme'
  // Otherwise, assume it's night-theme, and set it to day-theme
  } else {
    theme = 'day-theme'
  }
  // Store the new theme and apply the theme to the site
  window.localStorage.setItem('theme', theme)
  document.body.setAttribute('class', theme)
}

// Make sure there's a theme when you load the page
loadTheme()
// Initiate toggle button 
toggleButton.addEventListener('click', toggleTheme)
