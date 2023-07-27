import Score from './modules/score.js';
import ScoreList from './modules/scoreList.js';
import './styles.css';

const addScore = document.querySelector('#addScore');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const container = document.querySelector('#container');
const myScore = new ScoreList(container);

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = new Score(
    name.value,
    score.value,
  );
  myScore.createScore(item);
  name.value = '';
  score.value = '';
});
