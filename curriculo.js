var data = new Date();
var ano = data.getFullYear();

function idade() {
    var idadeMax = document.getElementById('idade');

    idadeMax.innerText = ano - 1985;
}

function abrirDados(item) {
    dados = document.getElementById('dados' + item);

    dados.style.display = 'block';
}
function fecharDados(item) {
    dados = document.getElementById('dados' + item);
    dados.style.display = 'none';
}
function abrirInfo() {
    dadosinf = document.getElementById('dados');
    habilidades = document.getElementById('habilidades');
    div = habilidades.querySelectorAll('div');
    
    
    span = dadosinf.querySelector('span');

    p = dadosinf.querySelectorAll('p');
    for (var i = 0; i < div.length; i++) {
        div[i].style.display = 'none';
         
     }

    for (var i = 0; i < p.length; i++) {
        p[i].style.display = 'block';

    }
    dadosinf.style.height = '180px';
    dadosinf.style.padding = '5px 0'

    span.style.opacity = '1';
    span.style.backgroundColor = '#cecece';
    span.span.borderRadius = '100%';
}

function fecharInfor(){
    dadosinf = document.getElementById('dados');
    habilidades = document.getElementById('habilidades');
    div = habilidades.querySelectorAll('div');
    
    
    span = dadosinf.querySelector('span');

    p = dadosinf.querySelectorAll('p');
    for (var i = 0; i < div.length; i++) {
        div[i].style.display = 'block';
         
     }
    

    for (var i = 0; i < p.length; i++) {
        p[i].style.display = 'none';

    }
    dadosinf.style.height = '0';
    dadosinf.style.padding = ' 0'

    span.style.opacity = '0';
    
}