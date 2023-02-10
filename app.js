let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsivo";
        menuVisible = true;
    }
}

function selecionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function efeitoHabilidades(){
    var exp = document.getElementById("exp");
    var distancia_exp = window.innerHeight - exp.getBoundingClientRect().top;
    if(distancia_exp >= 300){
        let habilidades = document.getElementsByClassName("prog");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("illustrator");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("java");
        habilidades[6].classList.add("comunicacao");
        habilidades[7].classList.add("trabalho");
        habilidades[8].classList.add("criatividade");
        habilidades[9].classList.add("dedicacao");
        habilidades[10].classList.add("dedicacao");
    }
}


window.onscroll = function(){
    efeitoHabilidades();
} 