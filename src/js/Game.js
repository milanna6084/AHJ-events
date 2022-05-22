import PlayingField from './PlayingField';

export default class Game {
  constructor() {
    this.field = new PlayingField();

    this.scores = document.querySelector('.scores');
    this.missedShots = document.querySelector('.missed');
  }

  init() {
    this.field.create();
    this.scores.textContent = '0';
    this.missedShots.textContent = '0';
    this.field.cellsOnClick = ((target) => this.onClick(target));
  }

  onClick(target) {
    if (target.classList.contains('person')) {
      const catchTarget = target;
      catchTarget.style.visibility = 'hidden';

      const scores = +this.scores.textContent + 1;

      this.scores.textContent = `${scores}`;
    } else {
      const missedShots = +this.missedShots.textContent + 1;

      this.missedShots.textContent = `${missedShots}`;

      if (missedShots > 4) {
        alert('Game over!');
        this.field.removeField();
        this.init();
      }
    }
  }
}
