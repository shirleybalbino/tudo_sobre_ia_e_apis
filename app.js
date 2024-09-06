function pesquisar(){
    // Obtém a seção onde os resultados serão exibidos no DOM (Document Object Model)
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (campoPesquisa == "") {
        section.innerHTML = "<P>Ei, você esqueceu de me contar o que quer saber. 😅 Me dá uma dica e eu te ajudo.</P>"
        return     
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma variável vazia que será usada para armazenar o HTML dos resultados
    let resultados = "";
    let título = "";
    let descrição = "";
    let tags = "";

    // Itera sobre cada item da lista 'APIs' para construir o HTML dinâmico para os resultados da pesquisa
    for (let dado of APIs) {
        título = dado.título.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (título.includes(campoPesquisa) ||descrição.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // Adiciona o HTML de cada item 'API' à variável 'resultados'
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.título}</a> <!-- Título do resultado com link -->
                </h2>
                <p class="descrição-meta">${dado.descrição}</p> <!-- Descrição do item -->
                <a href= ${dado.link} target="_blank">Mais informações.</a> <!-- Link para mais detalhes -->
            </div>`;
        }
    }

    // Itera sobre cada item da lista 'inteligenciaartificial' para gerar novos resultados
    for (let dado of inteligenciaartificial) {
        título = dado.título.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (título.includes(campoPesquisa) ||descrição.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.título}</a> <!-- Título do resultado com link -->
                </h2>
                <p class="descrição-meta">${dado.descrição}</p> <!-- Descrição do item -->
                <a href= ${dado.link} target="_blank">Mais informações.</a> <!-- Link para mais detalhes -->
            </div>`;
        }
    }

    // Itera sobre cada item da lista 'outros' para gerar novos resultados
    for (let dado of outros) {
        título = dado.título.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (título.includes(campoPesquisa) ||descrição.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // Adiciona o HTML de cada item 'outros' à variável 'resultados'
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.título}</a> <!-- Título do resultado com link -->
                </h2>
                <p class="descrição-meta">${dado.descrição}</p> <!-- Descrição do item -->
                <a href= ${dado.link} target="_blank">Mais informações.</a> <!-- Link para mais detalhes -->
            </div>`;
        }
    }
    if (!resultados) {
        resultados = "<P>Ops... Eu simplesmente não sei te responder.😢</P>"
    }
    // Atualiza o conteúdo da seção 'resultados-pesquisa' uma vez após todos os loops
    section.innerHTML = resultados;
}

function filtrarPorCategoria(categoria) {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma variável vazia que será usada para armazenar o HTML dos resultados
    let resultados = "";
    let título = "";
    let descrição = "";
    let tags = "";

    // Função para iterar e construir resultados de pesquisa
    function construirResultados(lista) {
        for (let dado of lista) {
            título = dado.título.toLowerCase();
            descrição = dado.descrição.toLowerCase();
            tags = dado.tags.toLowerCase();
            if (tags.includes(categoria.toLowerCase())) {
                resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.título}</a> <!-- Título do resultado com link -->
                    </h2>
                    <p class="descrição-meta">${dado.descrição}</p> <!-- Descrição do item -->
                    <a href= ${dado.link} target="_blank">Mais informações.</a> <!-- Link para mais detalhes -->
                </div>`;
            }
        }
    }

    // Filtra em cada lista com base na categoria clicada
    construirResultados(APIs);
    construirResultados(inteligenciaartificial);
    construirResultados(outros);

    if (!resultados) {
        resultados = "<P>Ops... Eu simplesmente não sei te responder.😢</P>";
    }

    // Atualiza a seção com os resultados filtrados
    section.innerHTML = resultados;
}

// Adiciona um listener ao campo de pesquisa para ouvir o pressionamento de teclas
document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Verifica se a tecla pressionada foi o "Enter"
        pesquisar();  // Chama a função de pesquisa
    }
})

// Adicionando evento de clique aos botões
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        let categoria = this.getAttribute('data-filter');
        if (categoria === "all") {
            filtrarPorCategoria(""); // Mostra todos os resultados
        } else if (categoria === "apis") {
            filtrarPorCategoria("APIs");
        } else if (categoria === "inteligencia-artificial") {
            filtrarPorCategoria("Inteligência Artificial");
        } else {
            filtrarPorCategoria(categoria); // Para 'Outros'
        }
    });
})



