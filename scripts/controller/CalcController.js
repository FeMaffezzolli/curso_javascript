class CalcController {
  constructor() {
    // Fetch calculator objects
    this.timeEl = document.querySelector("#hora");
    this.dateEl = document.querySelector("#data");
    this.displayCalcEl = document.querySelector("#display");
    this._currentDate;
    this.initialize();
  }

  initialize() {
    this.dateEl.innerHTML = "28/04/1994";
    this.timeEl.innerHTML = "23:59";
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(valor) {
    this._displayCalcEl.innerHTML = valor;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(date) {
    this._dateEl.innerHTML = date;
  }
}
