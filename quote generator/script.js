// Define an array of quotes
const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein"
    },
    {
      quote: "Imagination is more important than knowledge.",
      author: "Albert Einstein"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    }
  ];
  
  // Get DOM elements
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote-btn");
  
  // Function to generate a random quote
  function generateRandomQuote() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);
  
    // Get a random quote object from the array
    const randomQuote = quotes[randomIndex];
  
    // Update the quote and author elements with the random quote
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = randomQuote.author;
  }
  
  // Event listener for the new quote button
  newQuoteButton.addEventListener("click", generateRandomQuote);
  
  // Generate a random quote when the page loads
  generateRandomQuote();
  