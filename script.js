// Oppgave 4 DOM manipulasjon

// Steg 1 Lage en variabel som lagrer stringene så vi kan hente de senere.
let yodafiserteOrd = [];

// Her henter jeg HTML elementene ved hjelp av queryselector og lagrer de i en variabel som jeg kan bruke senere.

const textinput = document.querySelector("#textinput");

const yodafyer = document.querySelector("#yodafyBtn");

const yodafyedText = document.querySelector("#yodafyedTxt");

const resetButton = document.querySelector("#resetBtn");
// Komme tilbake til denne

function initYodaFy() {
  yodafyedText.textContent = "";

  textinput.value = "";
}

// Dette er funksjonen som deler opp ordene og lagrer stringene.
yodafyer.addEventListener("click", function () {
  const inputSetning = textinput.value.trim();

  if (inputSetning === "") {
    yodafyedText.innerText = "Write sentence here you must";
    return;
  }

  //   Her blir ordene lagret som strings i variabelen yodafiserteOrd
  yodafiserteOrd = inputSetning.split(" ");

  const ordKopi = [...yodafiserteOrd];

  //   Her er en consol.log og  en innerText property som legger ut nøkkelverdien til yodafyedText
  console.log(yodafiserteOrd);

  yodafyedText.innerText = "";
  // For loop som blander arrayen og legger de ut igjen i tilfeldig rekkefølge ved hjelp av Math.floor og Math.random.
  for (let i = ordKopi.length - 1; i > 0; i--) {
    const yod = Math.floor(Math.random() * (i + 1));
    [ordKopi[i], ordKopi[yod]] = [ordKopi[yod], ordKopi[i]];
  }
  // Her blir listen av strings om til en ny setning med mellomrom join(" ") og blir vist på siden ved bruk av .innerText
  yodafyedText.innerText = ordKopi.join(" ");
  console.log(ordKopi);
});

function reset() {
  yodafyedText.textContent = "";
}
resetButton.addEventListener("click", initYodaFy);

initYodaFy();
