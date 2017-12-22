class Driver {
  constructor(name, start) {
    this.name = name
    this.start = start
    this.startDate = new Date(start)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return this.startDate.year//endDate
  }
  // startDate() {
  //   return new Date(11, 11, 11)
  // }
}
