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
    source: '-Kobe Bryant',
    citation: 'Kobe Bryant Quotes | BrainyQuote.com, BrainyMedia Inc, 2022.',
    year: '2017'
  },
 {
    quote:  "Let us always meet each other with smile, for the smile is the beginning of love.",
    source: '-Mother Tersa',
    citation: 'Mother Teresa Quotes | BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
    year: '2002'
  },
 {
    quote: "The topic of leadership is a touchy one. A lot of leaders fail because they don't have the bravery to touch that nerve or strike that chord. Throughout my years, I haven't had that fear.",
    source: '-Kobe Bryant',
    citation: 'Kobe Bryant Quotes | BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
    year: '2022'
  },
 {
    quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    source: '-Alber Einstein' ,
    citation: 'Alber Einstein Quotes | BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
    year: '1909'
 },

 {
  quote: "Sometimes the questions are complicated, and the answers are simple.",
  source: '-Dr.Seuss' ,
  citation: 'Dr. Seuss Quotes | BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
  year: '1919'
},

{
  quote: "There are only two great tragedies in life: one is not getting what you want and the other is getting it.",
  source: '-Oscar Wilde',
  citation: 'Oscar Wilde Quotes | BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
  year: '1919'
},

{
  quote: "Anyone who has never made a mistake has never tried anything new.",
  source: '-Alber Einstein' ,
  citation: 'Alber Einstein Quotes | BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
  year: '1910'
},

{
  quote: "It's not that I'm so smart. It's just that I stay with problems longer.",
  source: '-Alber Einstein' ,
  citation: 'Alber EinsteinQuotes | BrainyQuote.com. BrainyMedia Inc, 2022. 12 July 2022.',
  year: '1911'
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
   <p class="source">${quote.source}`
    if (quote.citation !== undefined) {
     html += `<span class ="citation">${quote.citation}</span>`;
    }
    if (quote.year !== undefined) {
     html += `<span class = "year">${quote.year}</span></p>`;
  return(document.getElementById("quote-box").innerHTML = html);
    }
  }

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);