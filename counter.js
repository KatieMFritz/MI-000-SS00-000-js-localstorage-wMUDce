var counterDisplay = document.getElementById('counter-display')
var count = parseInt(window.localStorage.getItem('count'))

var updateCount = function () {
  // If count is null, parseInt(count) is NaN, so deal with that
  if (isNaN(count)) {
    count = 0
  }
  // Add 1 every time you refresh
  count = count + 1
  // Save that number to local storage
  window.localStorage.setItem('count', count)
}

// Update the counter on the page
var updateCounter = function () {
  if (count === 1) {
    counterDisplay.innerHTML = 'This is your first visit!'
  } else {
    counterDisplay.innerHTML = 'You have visited this page ' + count + ' times!'
  }
}

// Initialize
updateCount()
updateCounter()
