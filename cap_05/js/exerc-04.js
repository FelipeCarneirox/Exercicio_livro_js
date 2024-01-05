const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp-01");
const resp2 = document.querySelector("#resp-02");
 

frm.addEventListener("submit", (e) => {
    const titleMED = frm.inMedicine.value;
    resp1.innerText = `O ${titleMED} está na promoção`;
    e.preventDefault();

    const price = Math.floor(frm.inPrice.value);
    const calc = price * 2;
    resp2.innerText = `Leve 2 por: ${calc}`;
    e.preventDefault();
})