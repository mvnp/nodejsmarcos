const { obterPessoas } = require('../service')

Array.prototype.meuReduce = function(callback){

}

async function main() {
    try {
        const { results } = await obterPessoas(`a`)
        const altura = results.map(item => parseInt(item.height))
        const total = altura.reduce((anterior, proximo) => {
            return anterior + proximo
        }, 0)
        console.log(`total`, total)

    } catch (error) {
        console.error(`DEU RUIM`, error)  
    }
}

main()