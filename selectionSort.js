const livros = require("./listaLivros")
const menorValor = require("./menorValor")

livros.forEach((_, indice) => {
    
    let menor = menorValor(livros, indice)
    
    let livroAtual = livros[indice]
    console.log('posição atual', indice)
    console.log('livro Atual', livros[indice])
    
    let livroMenorPreco = livros[menor]
    console.log('livro menor preço', livros[menor])

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual
    console.log(`Ordenou a ${indice} vez`,livros)
})
console.log(livros)