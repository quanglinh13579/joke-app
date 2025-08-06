const jokes = [
  `A child asked his father, "How were people born?" The father said, "Adam and Eve made babies, and their babies made more babies."  
The child asked his mom, and she said, "We were monkeys and evolved."  
He ran back to dad: "You lied!"  
Dad said, "No, your mom was talking about her side of the family."`,

  `Teacher: "What does the chicken give you?"  
Student: "Eggs!"  
Teacher: "Good. What about the pig?"  
Student: "Bacon!"  
Teacher: "Great. And the cow?"  
Student: "Homework!"`,

  `A housewife, an accountant, and a lawyer were asked "What's 2 + 2?"  
The housewife said "4",  
The accountant said "Probably 3 or 4",  
The lawyer said "How much do you want it to be?"`
];
function getSeenJokes() {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('seenJokes='));
  return cookie ? JSON.parse(decodeURIComponent(cookie.split('=')[1])) : [];
}

function setSeenJokes(seen) {
  document.cookie = `seenJokes=${encodeURIComponent(JSON.stringify(seen))};path=/`;
}

function getNextJoke() {
  const seen = getSeenJokes();
  const remaining = jokes.filter((_, index) => !seen.includes(index));

  if (remaining.length === 0) {
    document.getElementById('end-message').style.display = 'block';
    document.getElementById('joke-content').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    return null;
  }

  const randomIndex = Math.floor(Math.random() * remaining.length);
  const jokeIndex = jokes.indexOf(remaining[randomIndex]);

  seen.push(jokeIndex);
  setSeenJokes(seen);

  return jokes[jokeIndex];
}

function showJoke() {
  const joke = getNextJoke();
  if (joke) {
    document.getElementById('joke-content').textContent = joke;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showJoke();

  document.getElementById('likeBtn').addEventListener('click', () => {
    console.log('Liked!');
    location.reload(); // load next joke
  });

  document.getElementById('dislike').addEventListener('click', () => {
    console.log('Disliked!');
    location.reload(); // load next joke
  });
});
