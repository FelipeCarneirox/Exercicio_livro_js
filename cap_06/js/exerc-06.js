const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    const timeClient = frm.inTime.value;
    const calc = (timeClient * 3) / 15;
    resp1.innerText = `O valor é ${calc.toFixed(2)} reais.`;
    e.preventDefault();
})