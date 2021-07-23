import { putScore, getScores, createGame} from '../Config/LeaderboardApi';

describe('Scores should be written and read from the API', () => {
  it('Should post the score', () => {
    putScore('Maosan132', 100).then(data => {
      expect(data).toBe('Leaderboard score created correctly.');
    });
  });
  it('Should retrieve all scores from the API', () => {
    getScores().then(data => {
      expect(typeof data).toBe('object');
      expect(data.result).toContainEqual('user');
    });
  });
});

describe('Should create a game with a valid name', () => {
  it('create a game to if the name is valid', () => {
    createGame().then((data) => {
      expect(data).toBeTruthy();
    });
  });
});

describe('Should retrieve the score', () => {
  it('return the score if the app exists', () => {
    getScores().then((data) => {
      expect(typeof data).toBe('object');
    });
  });
});
