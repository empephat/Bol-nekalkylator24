//Get the input tags from the DOM
const amountOfMoney = document.getElementById("money") as HTMLInputElement;
const rateOfInterest = document.getElementById("interest") as HTMLInputElement;
const durationTime = document.getElementById("duration") as HTMLInputElement;
//Get the button tag
const calculateBtn = document.getElementById("calculate") as HTMLButtonElement;
//Variable to print the result to the DOM
const printResult = document.getElementById("result") as HTMLOutputElement;
//Print error message for wrong duration
const printError = document.getElementById("errorResult") as HTMLOutputElement;

function CalculateLoan() {
  // Get the value from the input fields
  let money: number = Number(amountOfMoney.value);
  let interest: number = Number(rateOfInterest.value);
  let duration: number = Number(durationTime.value);

  // Validate input from the user
  if (isNaN(money) || isNaN(interest) || isNaN(duration) || money <= 0 || interest <= 0) {
    printResult.innerHTML = "Ange endast siffror här tack";
    return;
  }
  // Validate duration time from user
  if (duration < 5 || duration > 25) {
    printError.innerHTML = "Ange en trovärdig tidsperiod för avbetalning"
    return;
  }
  // Clear previous results
  printResult.innerHTML = "";

  // The math to calculate the loan
  let P = Number(amountOfMoney.value);
  let R = Number(rateOfInterest.value) / 100 / 12;
  let N = Number(durationTime.value) * 12;
  let monthlyPayment = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  // Round it so we don't get too many digits
    monthlyPayment = Math.round(monthlyPayment);
  // Calculate total cost of interest
  let totalInterest = monthlyPayment * N - P;
  // Present the overall result for the user
  printResult.innerHTML = `Lånebelopp: ${money}kr<br>Ränta: ${interest}%<br>Månadskostnad: ${monthlyPayment.toFixed(2)}kr<br>Total räntekostnad: ${totalInterest.toFixed(2)}kr`;
}

// Attach the function to the button so it runs on click
calculateBtn.addEventListener("click", CalculateLoan);
