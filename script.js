// Get the current theme if one was previously saved
var currentTheme = window.localStorage.getItem('currentTheme')
document.body.setAttribute('class', currentTheme)
// Then change the theme to that theme
window.localStorage.setItem('currentTheme', currentTheme)
// if no currentTheme was previously saved
if (currentTheme === null) {
  currentTheme = document.getElementById('body-id').className
  window.localStorage.setItem('currentTheme', currentTheme)
}
function setStyle () {
  // If the page is in night theme and setStyle is called, change the theme to day-theme
  if (document.body.className.match('night-theme')) {
    document.body.setAttribute('class', 'day-theme')
    window.localStorage.setItem('currentTheme', 'day-theme')
  } else {
    // If the page is in day theme and setStyle is called, change the theme to night-theme
    document.body.setAttribute('class', 'night-theme')
    window.localStorage.setItem('currentTheme', 'night-theme')
  }
}

function timesVisited () {
  // Display the int conversion of how many times the page has been visited
  var visitCount = parseInt(window.localStorage.getItem('visitCount'))
  // If the page has never been visited, set the counter to 0
  if (isNaN(visitCount)) {
    visitCount = 0
  }
  // Every time the page is visited increase visitCount by 1
  visitCount += 1

  window.localStorage.setItem('visitCount', visitCount)
  document.getElementById('visit-count').innerHTML = 'The number of times you have visited this page is: ' + visitCount
}
timesVisited()
