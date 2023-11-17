var methods_get = require("../services/methods_get.js")

describe("#Suite de testes automatizados para uma API", () => {
    setTimeout(() => {

    }, 20000)
    context("Todos os códigos de get", () => {
        it("CE01: quando realizar consulta geral, todos registros deve ser listados", (done) => {
            methods_get.return_get('/posts', 200, done)
        })
    })
    context("Outro get", () => {
        it("CE01: quando realizar consulta geral, todos registros deve ser listados", (done) => {
            methods_get.return_get('/posts/4', 200, done)
        })
    })
    context("Retorna erro", () => {
        it("CE01: quando realizar consulta geral, todos registros deve ser listados", (done) => {
            methods_get.return_get('/post', 404, done)
        })
    })
});