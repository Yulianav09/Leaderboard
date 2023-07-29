const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/shGaJ2LWA2HutNROMD9t/scores/';

export const sendScore = async (newScore) => {
  fetch(baseUrl, {
    method: 'POST',
    body: newScore,
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

export const getScores = async () => {
  const response = await fetch(baseUrl);
  return response.json();
};