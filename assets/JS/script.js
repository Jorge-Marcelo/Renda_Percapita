/*Capurar evento de submit do formulario*/
const form = document.getElementById("form");

/*Escutador de Evento*/
form.addEventListener("submit", function(event){
event.preventDefault();

/*Capturando inputs do formulario*/
const inputRenda = event.target.querySelector("#renda");
const inputPessoa = event.target.querySelector("#pessoa");

/*Capturando valores dos inputs*/
const renda = Number(inputRenda.value);
const pessoa = Number(inputPessoa.value);

/*Condição para ver se o valor digitado é um numero*/
if (!renda){
mostraResultado("Valor invalido, preencha os dois campos corretamente (apenas numeros)", false);
return;
}

if(!pessoa){
mostraResultado("Valor Invalido, preencha os dois campos corretamente (apenas numeros)", false);
return;
}

/*Constante que vai realizar o calculo*/
const calculo = renda / pessoa;

const mensagem = `A sua renda per capta é R$ ${calculo.toFixed(2)}`;
mostraResultado(mensagem, true);
})


/**/
function criaResultado(){
const p = document.createElement("p");
return p;
}

function criaErro2(){
const p2 = document.createElement("p");
return p2;
}

function mostraResultado(mensagem, isValid){
const sucesso = document.getElementById("sucesso");
sucesso.innerHTML = ``;

const erro = document.getElementById("error");
erro.innerHTML = '';

const segundoErro = document.getElementById("error2");
segundoErro.innerHTML = '';




const p = criaResultado();
const p2 = criaErro2();

if (isValid){
p.classList.add("sucesso");
p.innerHTML = mensagem;
sucesso.appendChild(p);

} else {
p.innerHTML = mensagem;
erro.appendChild(p);
p.classList.add("error");

p2.classList.add("error2");
p2.innerHTML = mensagem;
segundoErro.appendChild(p2);



}
}
