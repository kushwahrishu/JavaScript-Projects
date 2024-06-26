let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "pleas give a valid height !";

  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "pleas give a valid weight !";
    

  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}<br><h5>Under Weight<h5></span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}<br><h5>Normal Range<h5></span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}<br><h5>OverWeight<h5></span>`;
    }
  }
});

