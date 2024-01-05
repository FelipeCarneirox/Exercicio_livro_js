const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const nota1 = Math.round(frm.inNota1.value);
    const nota2 = Math.round(frm.inNota2.value);
    const nota3 = Math.round(frm.inNota3.value);
    const nota4 = Math.round(frm.inNota4.value);
     
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    if(media > 6.5){
       resp.innerText = `Você tirou ${media.toFixed(2)} esta aprovado!`;
    } else{
        resp.innerText = `Você tirou ${media.toFixed(2)} esta reprovado!`; 
    }
    e.preventDefault();
})