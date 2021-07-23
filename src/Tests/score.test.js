import InitSettings from '../Config/InitSettings';

describe('The scores should be set and read', () => {
  it('Should read the score', () => {
    InitSettings.score = 10;
    expect(InitSettings.score).toBe(10);
  });

  it('Should set the score', () => {
    InitSettings.score = 60;
    expect(InitSettings.score).toBe(60);
  });
  it('Should set the correct score', () => {
    InitSettings.score = 80;
    expect(InitSettings.score).not.toBe(100);
  });
});
