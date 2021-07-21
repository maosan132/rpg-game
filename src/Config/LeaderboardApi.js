import 'regenerator-runtime';

const createGame = async () => {
  console.log('lead-creategame');
  const name = JSON.stringify({ name: 'Dark Forest' });
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: name,
  };

  const key = await fetch(url, data);

  const keyData = await key.json();
  return keyData;
};

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

const putScore = async (user, score) => {
  console.log('leadApi-#putScore');
  const body = JSON.stringify({ user, score });
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  };
  const response = await fetch(url, data);
  const result = await response.json();
  return result;
};

const getScores = async () => {
  console.log('leadApi-#getScores');
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(url, data);
  const scores = await response.json();
  return scores.result;
};

export { putScore, getScores, createGame };
