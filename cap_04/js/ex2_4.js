const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
   const buffet = Number(frm.inQuilo.value);
   
   const eat = Number(frm.inConsumo.value);
   
   const calc = (buffet/1000) * eat;
   
   resp.innerText = `O valor é ${calc.toFixed(2)}`;
   e.preventDefault();
});
