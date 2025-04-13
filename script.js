const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don't let yesterday take up too much of today. – Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}
