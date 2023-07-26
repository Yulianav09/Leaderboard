
export default class ScoreList {
  constructor(container) {
    this.container = container;
    this.list = [];
  }

  createScore = (scoreInstance) => {
    const scoreItem = document.createElement('div');
    scoreItem.classList.add('scoreItem');

    scoreItem.innerHTML = `
    <div>${scoreInstance.name} :</div><div>${scoreInstance.score}</div>
    `;

    this.container.appendChild(scoreItem);
  }
}