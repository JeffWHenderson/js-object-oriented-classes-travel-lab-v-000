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
                      // Use Math.abs() to get only positive values of distance
      let horizontal =  eastWest.indexOf(this.endingLocation['horizontal']) - eastWest.indexOf(this.beginningLocation['horizontal'])

      let vertical =  this.endingLocation["vertical"] - this.beginningLocation['vertical']

      return Math.abs(vertical) + Math.abs(horizontal)
    }

    estimatedTime(peak) {
      if(peak) {
        return this.blocksTravelled() / 2
      } else {
        return this.blocksTravelled() / 3
      }
    }
}
