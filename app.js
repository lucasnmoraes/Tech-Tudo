function pesquisar() {

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
            section.innerHTML = "<p>Nada foi encontrado. Insira uma palavra na caixa de pesquisa.</p>"
            return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais...</a>
            </div>
        `;
            

        }
        // Concatena o HTML de cada resultado à string 'resultados'

    }

    if (!resultados) {
        resultados = "<p>nada foi encontrado</p>"

    }

    // Atribui o HTML gerado à propriedade innerHTML da seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}
