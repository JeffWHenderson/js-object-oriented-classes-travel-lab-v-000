class Driver {
  constructor(name, start) {
    this.name = name
    this.start = start
    this.startDate = new Date(start)
  }

  yearsExperienceFromBeginningOf(endDate) {
    console.log(this.startDate.getFullYear)//endDate
  }
  // startDate() {
  //   return new Date(11, 11, 11)
  // }
}
