import { putScore, getScores } from '../Config/LeaderboardApi';

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