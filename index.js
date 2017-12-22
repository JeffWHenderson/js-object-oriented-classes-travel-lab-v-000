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
      let horizontal =  eastWest.indexOf(this.endingLocation['horizontal']) - eastWest.indexOf(this.beginningLocation['horizontal'])

      let vertical =  this.endingLocation["vertical"] - this.beginningLocation['vertical']

      return vertical + horizontal
    }
}
