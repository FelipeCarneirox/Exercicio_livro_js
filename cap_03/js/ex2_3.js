const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
   const cars = frm.inVeiculo.value;
   resp1.innerText = `Promoção: ${cars}`;
   e.preventDefault();

   const price = frm.inPreco.value;
   const calc = price / 2;
   resp2.innerText = `Entrada de: ${calc.toFixed(2)}`;
   e.preventDefault();

   const parce = frm.inPreco.value;
   const calc2 = parce / 24;
   resp3.innerText = `Parcelamos também em 24x ${calc2.toFixed(2)}`;
   e.preventDefault();
});