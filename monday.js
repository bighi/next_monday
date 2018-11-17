function findNearestDayOfWeek (dayOfWeek) {
  if (dayOfWeek === undefined || dayOfWeek === null) { return false }
  dayOfWeek = _handleDayOfWeek(dayOfWeek)

  const date = new Date()
  date.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7)
  return date
}
const nearest = findNearestDayOfWeek

function findPreviousDayOfWeek (dayOfWeek) {
  if (dayOfWeek === undefined || dayOfWeek === null) { return false }
  dayOfWeek = _handleDayOfWeek(dayOfWeek)

  let date = findNearestDayOfWeek(dayOfWeek)
  const today = new Date()

  if (date.getTime() > today.getTime() || date.getDay() === today.getDay()) {
    date.setDate(date.getDate() - 7)
  }

  return date
}
const previous = findPreviousDayOfWeek

function findNextDayOfWeek (dayOfWeek) {
  if (dayOfWeek === undefined || dayOfWeek === null) { return false }
  dayOfWeek = _handleDayOfWeek(dayOfWeek)

  let date = findNearestDayOfWeek(dayOfWeek)
  const today = new Date()

  if (date.getTime() < today.getTime() || date.getDay() === today.getDay()) {
    date.setDate(date.getDate() + 7)
  }

  return date
}
const next = findNextDayOfWeek

function dayNameToNumber (name) {
  if (name === undefined || name === '') { return false }

  name = name.toLowerCase()

  switch (name) {
    case 'sunday':
      return 0
    case 'monday':
      return 1
    case 'tuesday':
      return 2
    case 'wednesday':
      return 3
    case 'thursday':
      return 4
    case 'friday':
      return 5
    case 'saturday':
      return 6
    default:
      return false
  }
}

function _handleDayOfWeek (dayOfWeek) {
  if (typeof dayOfWeek === 'string') {
    return dayNameToNumber(dayOfWeek)
  } else {
    return dayOfWeek
  }
}

module.exports = {
  findNearestDayOfWeek,
  findPreviousDayOfWeek,
  findNextDayOfWeek,
  nearest,
  previous,
  next
}
