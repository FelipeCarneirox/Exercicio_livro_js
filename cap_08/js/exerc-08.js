const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const idade = frm.inIdade.value;
    if(idade > 70){
        resp.innerText = `${idade} anos voto é opcional`;
    } else if(idade < 16) {
        resp.innerText = `${idade} anos não pode votar`;
    } else if(idade > 18) {
        resp.innerText = `${idade} anos é obrigado a votar`;
    } else {
        resp.innerText = `${idade} anos é opcional`;
    }
    e.preventDefault();
});