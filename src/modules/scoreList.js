import { getScores, sendScore } from './API.js';

export default class ScoreList {
  constructor(container) {
    this.container = container;
    this.list = [];
    this.#fetchList();
  }

  #fetchList = async () => {
    const response = await getScores();
    this.list = await response.result;
    this.list.forEach((element) => { this.#addScore(element); });
  }

  #addScore = (scoreInstance) => {
    const scoreItem = document.createElement('div');
    scoreItem.classList.add('scoreItem');

    scoreItem.innerHTML = `
    <div>${scoreInstance.user} :</div><div>${scoreInstance.score}</div>
    `;
    this.container.appendChild(scoreItem);
  }

  createScore = (scoreInstance) => {
    this.#addScore(scoreInstance);
    sendScore(JSON.stringify(scoreInstance));
  }

  refreshScores = () => {
    this.container.innerHTML = '';
    this.#fetchList();
  }
}