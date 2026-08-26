// Oppgave 4 DOM manipulasjon

// Array av objekter med kjente sitater

const sitater = [
  {
    name: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    lived: "1854–1900",
    occupation: "forfatter og dramatiker",
  },
  {
    name: "Marilyn Monroe",
    quote:
      "If you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    lived: "1926–1962",
    occupation: "skuespiller",
  },
  {
    name: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
    lived: "1879–1955",
    occupation: "fysiker",
  },
  {
    name: "Maya Angelou",
    quote:
      "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    lived: "1928–2014",
    occupation: "forfatter og poet",
  },
  {
    name: "Mark Twain",
    quote:
      "A lie can travel halfway around the world while the truth is still putting on its shoes.",
    lived: "1835–1910",
    occupation: "forfatter",
  },
  {
    name: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
    lived: "1955–2011",
    occupation: "gründer og oppfinner",
  },
  {
    name: "Groucho Marx",
    quote: "I refuse to join any club that would have me as a member.",
    lived: "1890–1977",
    occupation: "komiker",
  },
  {
    name: "Carl Sagan",
    quote: "We are a way for the cosmos to know itself.",
    lived: "1934–1996",
    occupation: "astrofysiker og forfatter",
  },
  {
    name: "Muhammad Ali",
    quote:
      "He who is not courageous enough to take risks will accomplish nothing in life.",
    lived: "1942–2016",
    occupation: "bokser",
  },
  {
    name: "Sylvia Plath",
    quote:
      "I took a deep breath and listened to the old brag of my heart: I am, I am, I am.",
    lived: "1932–1963",
    occupation: "poet og forfatter",
  },
];

// Her henter jeg HTML elementene ved hjelp av queryselector og lagrer de i en variabel som jeg kan bruke senere.

const textinput = document.querySelector("#textinput");

const yodafyer = document.querySelector("#yodafyBtn");

const yodafyedText = document.querySelector("#yodafyedTxt");

const resetButton = document.querySelector("#resetBtn");

const quoteyFyer = document.querySelector("#quoteBtn");
const quotafyedText = document.querySelector("#quotefyedTxt");

// Funksjon som velger et tilfeldig indekstall (famousQuote), og bruker det til å hente og returnere ett objekt fra sitater-arrayet
function getRandomQuote() {
  const famousQuote = Math.floor(Math.random() * sitater.length);

  return sitater[famousQuote];
}

// Eventlistener på QuoteyFyMe-knappen. Lager variablene randomQuote, blandetTekst og visningsTekst, og viser til slutt visningsTekst på siden.
quoteyFyer.addEventListener("click", function () {
  const randomQuote = getRandomQuote();
  const blandetTekst = shuffleWords(randomQuote.quote);
  const visningsTekst = `${blandetTekst} - <span class="quote-author">– ${randomQuote.name}, ${randomQuote.occupation}</span>`;
  quotafyedText.innerHTML = visningsTekst;
});

// Rensker opp i teksten i det en laster siden på nytt eller trykker på reset text knappen
function initYodaFy() {
  yodafyedText.textContent = "";
  quotafyedText.textContent = "";
  textinput.value = "";
}

// Tar imot String-parameteret(tekst)(Vi vet det er en string fordi vi senere kjører .split(" ") metoden) mens ordArray splitter setningen opp i individuelle strings, [...ordArray] lager en ny kopi av ordArray
function shuffleWords(tekst) {
  const ordArray = tekst.split(" ");
  const ordKopi = [...ordArray];
  // for loop som går baklengs igjennom arrayet (fra siste til første plass), og for hver posisjon velges et tilfeldig ord fra de gjenværende, ublandede ordene
  for (let i = ordKopi.length - 1; i > 0; i--) {
    // array destructuring: bytter plass på ordet på posisjon i og det tilfeldig valgte ordet på posisjon yod
    const yod = Math.floor(Math.random() * (i + 1));
    [ordKopi[i], ordKopi[yod]] = [ordKopi[yod], ordKopi[i]];
  }
  // returnerer ordkopi som en egen setning(string)
  return ordKopi.join(" ");
}

// Eventlistener som henter teksten, sjekker om den er tom og kaller på shuffleWords funksjonen.
yodafyer.addEventListener("click", function () {
  const inputSetning = textinput.value.trim();

  if (inputSetning === "") {
    yodafyedText.innerText = "Write sentence here you must";
    return;
  }

  const blandetTekst = shuffleWords(inputSetning);
  yodafyedText.innerText = blandetTekst;
});

resetButton.addEventListener("click", initYodaFy);

initYodaFy();
