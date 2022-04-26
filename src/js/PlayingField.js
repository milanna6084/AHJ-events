import goblinImg from '../img/goblin.png';

export default class PlayingField {
  constructor() {
    this.fieldSize = 4;
    this.cellsOnClick = null;
    this.field = document.querySelector('.field');
    this.prevShowIndex = -1;
    this.intervalIclear = null;
  }

  create() {
    let i = 0;

    while (i < this.fieldSize ** 2) {
      const cell = document.createElement('div');

      cell.classList.add('cellField');
      cell.addEventListener('click', (e) => this.onClick(e));

      const fieldWidth = parseInt(
        window.getComputedStyle(this.field, null).width,
        10,
      );
      const cellWidth = Math.round(fieldWidth / this.fieldSize) - 10;

      cell.style.width = `${cellWidth}px`;
      cell.style.height = `${cellWidth}px`;

      const img = document.createElement('img');

      img.classList.add('person');
      img.style.visibility = 'hidden';
      img.setAttribute('src', goblinImg);

      this.field.appendChild(cell);

      cell.appendChild(img);

      i += 1;
    }

    this.showGoblin();

    this.intervalIclear = setInterval(() => {
      this.showGoblin();
    }, 3000);
  }

  showGoblin() {
    const persons = this.field.querySelectorAll('.person');

    persons.forEach((person) => {
      const personItem = person;
      personItem.style.visibility = 'hidden';
    });

    const index = Math.floor(Math.random() * this.fieldSize ** 2);

    if (this.prevShowIndex === index) {
      this.showGoblin();
      return;
    }
    // this.fieldCells[index].firstChild
    persons[index].style.visibility = 'visible';
    this.prevShowIndex = index;
  }

  onClick(e) {
    if (this.cellsOnClick) {
      this.cellsOnClick(e.target);
    }
  }

  removeField() {
    clearInterval(this.intervalIclear);
    this.field.querySelectorAll('.cellField').forEach((item) => {
      item.remove();
      item.removeEventListener('click', (e) => this.onClick(e));
    });
  }
}
