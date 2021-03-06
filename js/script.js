document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

function redirecionar(){
    window.open("https://www.linkedin.com/in/jonathan-lima-b2ab70193/");
}

function redirecionar1(){
    window.open("https://twitter.com/Jonllima");
}

function redirecionar2(){
    window.open("https://github.com/Jon-Lima");
}

function enviar(){
    document.getElementById("btn btn-submit").innerHTML = "Enviado com sucesso!";
    //console.log(documento.getElementById("Obrigado por clicar!"));
    //alert("Obrigado por clicar!")
}
