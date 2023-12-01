const countdownDisplay = document.getElementById("countdown-display")
const countdownMessage = document.getElementById('countdown-message')

const countdown = (targetDate) => {
  const timeLeft = targetDate.getTime() - today.getTime()
  const days = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))

  return days
}

const renderCountdown = () => {
  const christmas = new Date('2023-12-25')
  const timeToChristmas = countdown(christmas)

  if (timeToChristmas === 0) {
    countdownMessage.innerHTML = 'Today is christmas'
    countdownDisplay.innerHTML = '🎅'
    return
  }

  if (timeToChristmas < 0) {
    countdownMessage.innerHTML = 'Christmas has passed'
    countdownDisplay.innerHTML = '🙁'
    return
  }

  countdownDisplay.innerHTML = timeToChristmas

}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    renderCountdown()
  }, 1000)
})

