class Clock {
  constructor() {
    const date = new Date;
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this),1000);
  }

  printTime() {
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(time);
  }

  _tick() {

    if (this.seconds === 59 ) {
      this.seconds = 0;
      if (this.minutes === 59) {
        this.minutes = 0;
        if (this.hours === 24) {
          this.hours = 0;
        }
        this.hours += 1;
      }
      this.minutes += 1;
    }
    this.seconds += 1;
    this.printTime();
  }

}

const clock = new Clock;
console.dir(clock);
