const tip = document.querySelectorAll(".grid div");
const totalBill = document.querySelector("#bill");
const customTip = document.querySelector(".custom input");
const resetBtn = document.querySelector(".reset-btn");
const totalPeople = document.querySelector("#total-people");
const invalidPeople = document.querySelector(".space-between p");

//bill amounts
var tipAmount = 0;
var customAmount = 0;
var bill = 0;
var noOfPeople = 0;
//handleBill
totalBill.addEventListener("input", () => {
  if (totalBill.value != "") {
    bill = totalBill.value;
  }
});
//Handling Tip Amount
const handleTip = () => {
  tip.forEach((e) => {
    e.addEventListener("click", () => {
      if (e === customTip.parentNode) {
        return;
      }
      tipAmount = e.textContent.slice(0, -1);
    });
  });
};
//Handling Number of People
totalPeople.addEventListener("input", () => {
  if (!invalidNum()) return;
  if (totalPeople.value != "") {
    noOfPeople = totalPeople.value;
  }
  handleTotalCalculation();
});
//calling tip function just in case
handleTip();

//handling Bill Reset Button
function handleTotalCalculation() {
  if (customTip.value !== "") customAmount = customTip.value;
  handleTip();
  if (customAmount > 0) {
    tipAmount = customAmount;
  }
  if (invalidNum()) {
    calculate(parseInt(tipAmount), parseInt(bill), parseInt(noOfPeople));
  }
}

//calculate tip
const TipAmountPerPerson = document.querySelector(".t");
const TotalBillTotalPerson = document.querySelector(".p");
function calculate(amount, bill, person) {
  let totalTipAmount = (bill * amount) / 100 / person;
  let totalBillAmount = (bill + totalTipAmount) / person;

  TipAmountPerPerson.textContent = `${totalTipAmount.toFixed(2)}`;
  TotalBillTotalPerson.textContent = `${totalBillAmount.toFixed(2)}`;
}

//invalid no of people

function invalidNum() {
  if (parseInt(totalPeople.value) <= 0 || totalPeople.value === "") {
    invalidPeople.classList.remove("hide");
    totalPeople.classList.add("invalid");
    console.log("invalid value");
    return false;
  } else {
    invalidPeople.classList.add("hide");
    totalPeople.classList.remove("invalid");
    return true;
  }
}
resetBtn.addEventListener("click", () => {
  resetEverthing();
});
function resetEverthing() {
  tipAmount = 0;
  customAmount = 0;
  bill = 0;
  noOfPeople = 0;
  totalPeople.value = "";
  totalBill.value = "";
  customTip.value = "";
}
