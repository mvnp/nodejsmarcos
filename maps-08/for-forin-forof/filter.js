/** Importando uma função específica */
const { obterPessoas } = require('../service')

/**
    ######################################
    ## DESTRUCTURING #####################
    ######################################

    const item = {
        name: 'Marcos Vinicius',
        idade: 34,
        cpf: '02039326170',
        cidade: 'Palhoça',
        bairro: 'Bela Vista',
        casado: true
    }

    const { name, idade } = item
    console.log(nome, idade)
 */

Array.prototype.meuFilter = function(callback)
{
    const lista = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        
        // 0, "", null, undfefined === false   
        if(!result) continue;
        lista.push(item)
    }
    return lista
}

async function main() 
{
    try {
        const {
            results
        } = await obterPessoas(`a`)

        /* 
        const familiaLars = results.filter(function(item){

            // Ele está removendo de results tudo que não tem Lars
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })
        */

        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)

    } catch (error) {
        console.error(`DEU RUIM`, error)
    }
}

main()