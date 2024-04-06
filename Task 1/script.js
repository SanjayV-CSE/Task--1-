const myCheckBox = document.getElementById("myCheckBox");
const VisaRadio = document.getElementById("VisaRadio");
const MasterCardRadio = document.getElementById("MasterCardRadio");
const PayPalRadio = document.getElementById("PayPalRadio");
const mySub = document.getElementById("mySub");
const payment = document.getElementById("payment");
const subresult = document.getElementById("subresult");

mySub.onclick = function () {
  if (myCheckBox.checked) {
    subresult.textContent = `SUBSCRIBED`;
  } else {
    subresult.textContent = `NOT SUBSCRIBED`;
  }
  if (VisaRadio.checked) {
    payment.textContent = `Choosing VISA`;
  } else if (MasterCardRadio.checked) {
    payment.textContent = `Choosing MASTER`;
  } else if (PayPalRadio.checked) {
    payment.textContent = `Choosing PAYPAL`;
  } else {
    payment.textContent = `Print Something`;
  }
};
