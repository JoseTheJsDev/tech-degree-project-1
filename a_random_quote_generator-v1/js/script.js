/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array of objects
***/
const quotes = [
  {
    quote:  "The important thing is that your teammates have to know you're pulling for them and you really want them to be successful.",
    source: 'Kobe Bryant',
    citation: 'Kobe Bryant Quotes. BrainyQuote.com, BrainyMedia Inc, 2022.',
    year: '2017'
  },
 {
    quote:  "Let us always meet each other with smile, for the smile is the beginning of love.",
    source: 'Mother Tersa',
    citation: '"Mother Teresa Quotes." BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
    year: '2002'
  },
 {
    quote: "The topic of leadership is a touchy one. A lot of leaders fail because they don't have the bravery to touch that nerve or strike that chord. Throughout my years, I haven't had that fear.",
    source: 'Kobe Bryant',
    citation: '"Kobe Bryant Quotes." BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
    year: '2022'
  },
 {
    quote: 'Good leadership consists of showing average people how to do the work of superior people.',
    source: 'John D. Rockefeller' ,
    citation: 'John D. Rockefeller Quotes." BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
    year: '1919'
 },

 {
  quote: 'Good leadership consists of showing average people how to do the work of superior people.',
  source: 'John D. Rockefeller' ,
  citation: 'John D. Rockefeller Quotes." BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
  year: '1919'
},

{
  quote: 'Good leadership consists of showing average people how to do the work of superior people.',
  source: 'John D. Rockefeller' ,
  citation: 'John D. Rockefeller Quotes." BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
  year: '1919'
},

{
  quote: 'Good leadership consists of showing average people how to do the work of superior people.',
  source: 'John D. Rockefeller' ,
  citation: 'John D. Rockefeller Quotes." BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
  year: '1919'
},

{
  quote: 'Good leadership consists of showing average people how to do the work of superior people.',
  source: 'John D. Rockefeller' ,
  citation: 'John D. Rockefeller Quotes." BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
  year: '1919'
},
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  let randomQuote = quotes[Math.floor(Math.random () * quotes.length)]; 
  return randomQuote;
};

/***
 * `printQuote` function
***/
function printQuote () {
  let quote = getRandomQuote ();

  let html = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}</p>`
  return(document.getElementById("quote-box").innerHtml = html);
  };

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);