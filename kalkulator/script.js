const layar = document.querySelector(".screen");

document
  .querySelector(".calculator-body")
  .addEventListener("click", function (event) {
    if (event.target.tagName !== "INPUT") return;

    if (event.target.classList.contains("action-clear")) {
      layar.innerText = "";
      return;
    }
    
    if (event.target.classList.contains("action-backspace")) {
      layar.innerText = layar.innerText.slice(0, -1);
      return;
    }
    
    if (event.target.classList.contains("action-evaluate")) {
      try {
        layar.innerText = eval(layar.innerText);
      } catch (err) {
        layar.innerText = "Error";
      }
      return;
    }

    if (event.target.classList.contains("action-percent")) {
      layar.innerText = Number(layar.innerText) / 100;
      return;
    }

    if (event.target.classList.contains("action-sin")) {
      const valueRad = Number(layar.innerText) * Math.PI / 180;
      console.log(valueRad);
      layar.innerText = bulatBelakangKoma(Math.sin(valueRad), 7);
      return;
    }

    if (event.target.classList.contains("action-cos")) {
      const valueRad = Number(layar.innerText) * Math.PI / 180;
      layar.innerText = bulatBelakangKoma(Math.cos(valueRad), 7);
      return;
    }

    if (event.target.classList.contains("action-tan")) {
      const valueRad = Number(layar.innerText) * Math.PI / 180;
      layar.innerText = bulatBelakangKoma(Math.tan(valueRad), 7);
      return;
    }
    
    layar.innerText += event.target.value;
  });

function bulatBelakangKoma(angka, belakangKoma) {
  const puluhan = Math.pow(10, belakangKoma);
  console.log(puluhan);
  return Math.round(angka * puluhan) / puluhan;
}