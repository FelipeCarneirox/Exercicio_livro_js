const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e)=>{
    const description = frm.inPedido.value;
    resp1.innerText = `${description}`;
    e.preventDefault();

    const valueEat = frm.inValue.value;
    resp2.innerText = `${valueEat}`;
    e.preventDefault();
});

