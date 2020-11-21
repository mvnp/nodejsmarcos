/**
 * 0 - Obter usuário
 * 1 - Obter número de telefone pelo Id
 * 3 - Obter endereço do usuário pelo Id
 */
function obterUsuario(callback) {
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: 'Marcos Vinicius',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            numero: '99189-3313',
            ddd: '48'
        })
    }, 2000);
}

function obterEndereco(idUusuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'José Onófre Pereira',
            numero: 1060,
            complemento: 'F 406'
        })
    }, 2000);
}

function resolverUsuario(erro, usuario) {
    
    console.log('usuario', usuario);
}

obterUsuario(function resolverUsuario(error, usuario){
    
    if(error) {
        console.log('DEU RUIM NO USUÁRIO', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {

        if(error1) {
            console.log('DEU RUIM NO TELEFONE', error1)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {

            if(error2) {
                console.log('DEU RUIM NO ENDEREÇO', error2)
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, ${endereco.numero} 
                Telefone: (${telefone.ddd}) ${telefone.numero}
            `)
        });
    });
});