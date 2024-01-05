const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
   const nameTitle = frm.inTitulo.value
   resp.innerText = `Filme ${nameTitle}`
   e.preventDefault()
});

frm.addEventListener("submit", (e) => {
    const timeDuration = frm.inDuracao.value;
    const timeTotal = timeDuration / 60;
    resp2.innerText = `Duração de ${timeTotal} horas`
    e.preventDefault()
})

