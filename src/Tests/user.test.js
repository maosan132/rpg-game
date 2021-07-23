import InitSettings from '../Config/InitSettings';

describe('The username should be set and read', () => {
  it('Should set the user name', () => {
    InitSettings.userName = 'Jon Doe';
    expect(InitSettings.userName).toBe('Jon Doe');
  });

  it('Should get the user name', () => {
    expect(InitSettings.userName).toBe('Jon Doe');
  });
});