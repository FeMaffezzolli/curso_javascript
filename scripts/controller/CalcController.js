class CalcController {
  constructor() {
    // Fetch calculator objects
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this.initialize();
  }

  initialize() {
    this._dateEl.innerHTML = "28/04/1994";
    this._timeEl.innerHTML = "23:59";
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(date) {
    this._dateEl.innerHTML = date;
  }
}
