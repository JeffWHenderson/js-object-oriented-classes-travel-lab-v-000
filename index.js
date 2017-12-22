class Route {
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    
  }
}

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
