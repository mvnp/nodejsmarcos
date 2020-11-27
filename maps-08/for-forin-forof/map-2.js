const service = require('../service')

// MINHA PROPRIA IMPLEMENTACAO DE MAP
Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for (let index = 0; index <= this.length - 1; index++) {
        const resultado = callback(this[index], index)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}

async function main() {

    try {
        const results = await service.obterPessoas(`a`)
        
        // const names = []
        // results.results.forEach(function(item){
        //     names.push(item.name)
        // })
        const names = results.results.meuMap(function(pessoa, indice){
            return `[${indice}] - ${pessoa.name}`
        })

        console.log('names', names)
    } 
    catch (error) 
    {   
        console.error('DEU RUIM', error)
    }
}

main()