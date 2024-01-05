const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp01");
const resp2 = document.querySelector("#resp02");

frm.addEventListener("submit", (e) => {
    const titleProduct = frm.inName.value;
    const Price = frm.inPrice.value;
    const calc = (Price * 3) - 3;
    resp1.innerText = `${titleProduct} - Promoção: Leve 3 por R$ ${calc.toFixed(2)}`;
    e.preventDefault();

    resp2.innerText = `O 3º produto custa apenas R$: 3 reais`;
    e.preventDefault();
});