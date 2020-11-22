/**
 * 0 - Obter usuário
 * 1 - Obter número de telefone pelo Id
 * 3 - Obter endereço do usuário pelo Id
 */
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'Marcos Vinicius',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                numero: '99189-3313',
                ddd: '48'
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'José Onófre Pereira',
            numero: 1060,
            complemento: 'F 406'
        })
    }, 2000);
}

main()
async function main(){

    try {

        console.time('medida-promise');
        
        const usuario = await obterUsuario()
        
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const endereco = resultado[1]
        const telefone = resultado[0]
        
        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.numero}
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)

        console.timeEnd('medida-promise');
    } 
    catch (error) {
        
        console.log('DEU RUIM!', error)
    }
}

// const usuarioPromise = obterUsuario()

// usuarioPromise
//     .then(function(usuario){
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result){
//                 return {
//                     usuario: {
//                         nome: usuario.nome,
//                         id: usuario.id
//                     },
//                     telefone: result
//                 }    
//             })
//     })
//     .then(function(resultado){

//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result) {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         });
//     })
//     .then(function(resultado){
    
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.numero} 
//         `)
//     })
//     .catch(function(error){

//         console.log("DEU RUIM -> ", error)
//     }
// );