let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, start) {
    this.name = name
    this.start = start
    this.startDate = new Date(start)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

    blocksTravelled() {
      this.beginningLocation['horizontal']
      return tthis.beginningLocation['vertical'] - this.ending['vertical']
    }
}
