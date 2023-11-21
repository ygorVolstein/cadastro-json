document.addEventListener('DOMContentLoaded', function(){

    const formulario = document.getElementById('meuFormulario');
    const lista = document.getElementById('lista');
    const baixar = document.getElementById('baixar');
    var listaDados = [];

    if(formulario){
        formulario.addEventListener('submit', function(event){
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const idade = document.getElementById('idade').value;

            const dados = {

                nome: nome,
                email: email,
                idade: idade

            };

            listaDados.push(dados);


            formulario.reset();


            exibirUsuario();
        });

        baixar.addEventListener('click', function(){
            const dadosJson = JSON.stringify(listaDados);
            const blob = new Blob([dadosJson], {type: "application/json"});

            const url = URL.createObjectURL(blob);

            const linkDownload = document.createElement("a");
            linkDownload.href = url;
            linkDownload.download = 'dados_usuários.json';

            document.body.appendChild(linkDownload);

            linkDownload.click();

            URL.revokeObjectURL(url);
        });



    }
    else{
        console.error("Elemento com id 'meuFormulario' não encontrado");
    }

    function exibirUsuario(){
        lista.innerHTML = "";
        listaDados.forEach(function(usuario, indice){
            const listaItem = document.createElement("li");
            listaItem.innerHTML = `Nome: ${usuario.nome}, Email: ${usuario.email}, Idade: ${usuario.idade} `
            lista.appendChild(listaItem);
        })
    }
});