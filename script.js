const conteiner_principal = document.querySelector(".conteiner-pagina-inicial")

// variaveis add contato
const conteiner_pagina2ADDcontato = document.querySelector(".pagina-adicionar-contato")
const voltarPAginA_adicionarCONTATO = document.querySelector("#voltar-da-pagina-ADDcontato")
const add_contato = document.querySelector("#adicionar-contato")

// variaveis pesquisar contato
const pesquisar_contato = document.querySelector(".pesquisar-contato")
const lupa_pesquisarContato = document.querySelector("#pesquisa-contato")
const voltar_daJANELApesquisar = document.querySelector("#voltarDAJANELApesquisar")
const confirma_pesquisar_contato = document.querySelector("#pesquisarcontato")
const resultado_dapesquisa = document.querySelector(".conteudo-pesquisado")
const inputpesquisa = document.querySelector("input[name='contato-pesquisado']")

// variaveis configuraoes adicionais
const mensagemERRo = document.querySelector("h4")
const configuracoes = document.querySelector("#configuracao-adicional")
const menuOpcoesADIcionais = document.querySelector(".menu")

// variaveis conteiner favoritos
const conteiner_favorito = document.querySelector(".favoritos-conteiner")
const voltarJANELAfavoritos = document.querySelector("#voltar-da-pagina-favoritos")
const chamar_favoritos = document.querySelector("#chamar-function_favoritos")
const mostrarfavoritos = document.querySelector(".mostrar-favoritos")
const butao_favorito = document.querySelector("#butao-favoritos")
const addfavoritomultiplaselecao = document.querySelector(".addfavoritos-multiplaselecao")

const mostrarcontatos = document.querySelector(".conteiner-mostrarContatos")

const butoes = document.querySelector(".butoes")
const excluir = document.querySelector("#excluirContato")

// variaveis descricao
const conteinerdescricao = document.querySelector("#conteiner_descricao")
const conteudodescricao = document.querySelector(".conteudo-descricao")
const voltarPAGINAdescricao = document.querySelector("#voltar-dapagina-discricaoContato")
const excluircontatodescricao = document.querySelector("#excluir-contato-dadescricao")
const chamarPAginaEDicao = document.querySelector("#chamarPAGINAdeEdicao")

// variaveis pegar o valor add contato
const nomeADD = document.querySelector("#nome")
const telefoneADD = document.querySelector("#telefone")
const comfirmaADD = document.querySelector("#comfimar-ADDcontato")


const cabecalho = document.querySelector("header")
const selecionados = document.querySelector("#multiplaselecao")
const cancelarselecao = document.querySelector("#cancelar")

// variaveis conteiner edicao
const conteinerEdicao = document.querySelector(".conteiner-edicao")
const voltarJANELAdeEdicao = document.querySelector("#voltar-pagina-deEdicao")
const comfirmaalterarcontato = document.querySelector("#confirmar-edicaoDOcontato")
const inputnomeEDICAO = document.querySelector("input[name='nome']")
const inputelefoneEDICAO = document.querySelector("input[name='telefone']")
const cancelarEDIcao = document.querySelector("#cancelar-edicao")

// addeventliste conteiner edicao
comfirmaalterarcontato.addEventListener("click",comfimar_contatoEDItado)

// addeventliste conteiner descricao
voltarPAGINAdescricao.addEventListener("click",alterar_entre_janelasdescricao_e_pesquisar)
addfavoritomultiplaselecao.addEventListener("click",adicionarAOSfavoritos)
excluircontatodescricao.addEventListener("click",excluircontato_dadescricao)
chamarPAginaEDicao.addEventListener("click",conteinerpaginaEdicao)
cancelarEDIcao.addEventListener("click",cancelar_edicao)

// addeventliste configuraoes adicionais 
document.addEventListener("click", (event) =>{
    if (!menuOpcoesADIcionais.contains(event.target) && !event.target.closest("#configuracao-adicional")
    ){
menuOpcoesADIcionais.style.display = "none"
}
})
selecionados.addEventListener("click",() => {
    menuOpcoesADIcionais.style.display = "none"
    cabecalho.style.visibility = "hidden"
    cancelarselecao.style.display = "flex"
    h2.style.visibility = "visible"
    modoselecao = true
})
configuracoes.addEventListener("click",configuracoesADicionais)


cancelarselecao.addEventListener("click",cancelarselecaodoscontatos)

// addeventlist conteiner favoritos
chamar_favoritos.addEventListener("click",conteinerFavorito)
voltarJANELAfavoritos.addEventListener("click",voltardaJAneLAfavoritos)
butao_favorito.addEventListener("click",alterarfavorito)

excluir.addEventListener("click",excluircontato)

// addeventlist conteiner pesquisar
lupa_pesquisarContato.addEventListener("click",pesquisarContato)
voltar_daJANELApesquisar.addEventListener("click",voltarJANeladePEsquisa)
confirma_pesquisar_contato.addEventListener("click",Confirma_pesquisa)
inputpesquisa.addEventListener("input",Confirma_pesquisa)

// addeventlist add contato
add_contato.addEventListener("click",adicionarContato)
voltarPAginA_adicionarCONTATO.addEventListener("click",voltar_addcontao_paraPGinicial)
comfirmaADD.addEventListener("click",comfirmaContato)

// responsavel por mostrar os contatos na tela
// assim que a pagina atualisa, mostra os contatos na tela
window.addEventListener("load",mostrarContatos)

const contatos = [
{ nome: "Vinicius", telefone: "98981000001", favorito: false },
{ nome: "Amanda", telefone: "98981000002", favorito: true },
{ nome: "Thiago", telefone: "98981000003", favorito: false },
{ nome: "Carlos", telefone: "98981000004", favorito: false },
{ nome: "Mariana", telefone: "98981000005", favorito: true },
{ nome: "Otávio", telefone: "98981000006", favorito: false },
{ nome: "Beatriz", telefone: "98981000007", favorito: false },
{ nome: "Lucas", telefone: "98981000008", favorito: true },
{ nome: "Fernanda", telefone: "98981000009", favorito: false },
{ nome: "João", telefone: "98981000010", favorito: false },

{ nome: "Aline", telefone: "98981000011", favorito: false },
{ nome: "Rafael", telefone: "98981000012", favorito: true },
{ nome: "Vanessa", telefone: "98981000013", favorito: false },
{ nome: "Pedro", telefone: "98981000014", favorito: false },
{ nome: "Sophia", telefone: "98981000015", favorito: true },
{ nome: "Bruno", telefone: "98981000016", favorito: false },
{ nome: "Ana", telefone: "98981000017", favorito: false },
{ nome: "Daniel", telefone: "98981000018", favorito: true },
{ nome: "Patricia", telefone: "98981000019", favorito: false },
{ nome: "Mateus", telefone: "98981000020", favorito: false },

]

function mostrarContatos(){
    mostrarcontatos.innerText = ""
    console.log("entrou aqui")
    console.log(contatos)
    
    // Ordena os contatos de A → Z.
    // localeCompare() compara as strings respeitando as regras do idioma,
    // enquanto sort() reorganiza os objetos dentro do array.
    contatos.sort((nome1,nome2) => nome1.nome.localeCompare(nome2.nome))
    
    for(let Contato of contatos){
        
        const card = document.createElement("div")
        const nome  = document.createElement("h3")
        const numero = document.createElement("p")
        
        nome.innerText = Contato.nome
        numero.innerText = Contato.telefone
        card.appendChild(nome)
        card.appendChild(numero)
        mostrarcontatos.appendChild(card)
        card.addEventListener("click",function(event){
            if(modoselecao === true){
                contatoSelecionados(event)
            }else{
                descricaoDOcontato(event)
            }
        })
    }
    
}

let verificarARmazenamento = localStorage.getItem("contatos")

if(verificarARmazenamento !== null){
    contatos.push(...JSON.parse(localStorage.getItem("contatos")))
}

let contador = 0

let remover_Visualmente = []
let remove_internamente = []

let h2 = document.createElement("h2")
conteiner_principal.appendChild(h2) 

let modoselecao = false
let origemDescricao = "pagina principal"

function contatoSelecionados(event){
    let selecionado = event.currentTarget.classList.contains("selecionado")

    if(selecionado === false){
        event.currentTarget.classList.add("selecionado")
        remover_Visualmente.push(event.currentTarget)
        remove_internamente.push({nome:event.currentTarget.querySelector("h3").textContent,telefone:event.currentTarget.querySelector("p").textContent})
        contador++
    }else{
        event.currentTarget.classList.remove("selecionado")
        for(let i = 0; i < remove_internamente.length; i++){
            
            if(remove_internamente[i].nome === event.currentTarget.querySelector("h3").textContent && remove_internamente[i].telefone === event.currentTarget.querySelector("p").textContent){
                remove_internamente.splice(i,1)
                remover_Visualmente.splice(i,1)
            }
        }
        contador--
    }
    
    
    if(contador > 0){
        butoes.style.display = "flex"
    }else{
        contador = 0
    }
    
    h2.innerText = `${contador} selecionado(s)`


}

function cancelarselecaodoscontatos(){
    contador = 0
    modoselecao = false
    let selecionado = document.querySelectorAll(".selecionado")
    
    selecionado.forEach(contato => {
        contato.classList.remove("selecionado")
    })
    
    butoes.style.display = "none"
    h2.style.visibility = "hidden"
    cabecalho.style.visibility = "visible"
    cancelarselecao.style.display = "none"
}

function adicionarContato(){
    h2.style.visibility = "hidden"
    contador = 0
    butoes.style.display = "none"
    
    conteiner_principal.style.display = "none"
    conteiner_pagina2ADDcontato.style.display = "flex"

}

function configuracoesADicionais(){
    if(menuOpcoesADIcionais.style.display === "flex"){
        menuOpcoesADIcionais.style.display = "none"
    }else{
        menuOpcoesADIcionais.style.display = "flex"
    }
}

let elementosDEscricao = []
let descricaoRemover = "" 
let atualisardescricao = false

function descricaoDOcontato(event){
    conteiner_principal.style.display = "none"
    conteinerdescricao.style.display = "flex"
    pesquisar_contato.style.display = "none"
    if(atualisardescricao === false){
        elementosDEscricao.push({nome:event.currentTarget.querySelector("h3").textContent,telefone:event.currentTarget.querySelector("p").textContent})

        descricaoRemover = event.currentTarget
    
        for(let descricao of elementosDEscricao){
            
            const card = document.createElement("div")
            const nome = document.createElement("h3")
            const numero = document.createElement("p")
            const img = document.createElement("img")
            const img2 = document.createElement("img")
            const favorito = document.createElement("h5")
    
            img.src = "./img/homem.png"
            img2.src = "./img/telefone.png"
            nome.innerText = descricao.nome
            numero.innerText = descricao.telefone
            
            for( let msgfavorito of contatos){
                if(msgfavorito.nome === descricao.nome && msgfavorito.telefone === descricao.telefone){
    
                    if(msgfavorito.favorito === true){
                        butao_favorito.innerText = "remover dos favoritos"
                        favorito.innerText = "esse contato está na sua lista de favoritos"
                    }else{
                        butao_favorito.innerText = "adicionar aos favoritos"
                        favorito.innerText = "esse contato não está na sua lista de favoritos"
                    }
                
                
                }
            
            }   
    
            nome.appendChild(img)
            numero.appendChild(img2)
            card.appendChild(nome)
            card.appendChild(numero)
            card.appendChild(favorito)
            conteudodescricao.appendChild(card)
        }
    
    }else{
        
        for(let descricao of elementosDEscricao){
            
            const card = document.createElement("div")
            const nome = document.createElement("h3")
            const numero = document.createElement("p")
            const img = document.createElement("img")
            const img2 = document.createElement("img")
            const favorito = document.createElement("h5")

            img.src = "./img/homem.png"
            img2.src = "./img/telefone.png"
            nome.innerText = descricao.nome
            numero.innerText = descricao.telefone
            
            
            nome.appendChild(img)
            numero.appendChild(img2)
            card.appendChild(nome)
            card.appendChild(numero)
            card.appendChild(favorito)
            conteudodescricao.appendChild(card)

            for( let msgfavorito of contatos){
                
                if(msgfavorito.nome === descricao.nome && msgfavorito.telefone === descricao.telefone){
    
                    if(msgfavorito.favorito === true){
                        butao_favorito.innerText = "remover dos favoritos"
                        favorito.innerText = "esse contato está na sua lista de favoritos"
                    }else{
                        butao_favorito.innerText = "adicionar aos favoritos"
                        favorito.innerText = "esse contato não está na sua lista de favoritos"
                    }
                
                
                }
            
            }   

    }

}

}

function atualizardescricao(){
        for(let descricao of elementosDEscricao){
        
        const card = document.createElement("div")
        const nome = document.createElement("h3")
        const numero = document.createElement("p")
        const img = document.createElement("img")
        const img2 = document.createElement("img")
        const favorito = document.createElement("h5")

        img.src = "./img/homem.png"
        img2.src = "./img/telefone.png"
        nome.innerText = descricao.nome
        numero.innerText = descricao.telefone
        
        for( let msgfavorito of contatos){
            if(msgfavorito.nome === descricao.nome && msgfavorito.telefone === descricao.telefone){

                if(msgfavorito.favorito === true){
                    butao_favorito.innerText = "remover dos favoritos"
                    favorito.innerText = "esse contato está na sua lista de favoritos"
                }else{
                    butao_favorito.innerText = "adicionar aos favoritos"
                    favorito.innerText = "esse contato não está na sua lista de favoritos"
                }
            
            
            }
        
        }   

        nome.appendChild(img)
        numero.appendChild(img2)
        card.appendChild(nome)
        card.appendChild(numero)
        card.appendChild(favorito)
        conteudodescricao.appendChild(card)
    }
}

function pesquisarContato(){
    contador = 0
    butoes.style.display = "none"
    h2.style.visibility = "hidden"

    
    conteiner_principal.style.display = "none"
    pesquisar_contato.style.display = "flex"
}

function voltar_addcontao_paraPGinicial(){
    conteiner_principal.style.display = "grid"
    conteiner_pagina2ADDcontato.style.display = "none"
}

function voltarJANeladePEsquisa(){
    pesquisar_contato.style.display = "none"
    conteiner_principal.style.display = "grid"
}

function voltardajaneladescricao(){
    atualisardescricao = false
    mostrarContatos()
    conteudodescricao.innerText = ""
    origemDescricao = "pagina principal"
    elementosDEscricao = []    
    conteiner_principal.style.display = "grid"
    conteinerdescricao.style.display = "none"
}

function comfirmaContato(){
    const favoritoADD = document.querySelector('input[name="favoritos"]:checked')
        
    let contatoNOME = nomeADD.value
    let contato_numero = telefoneADD.value
    
    if(nomeADD.value == "" || telefoneADD.value == ""){
        mostrar_mensagemERRo()
        
    }else if(!/^\d{11}$/.test(contato_numero)){
        mensagemNUMEROinvalido()
        
    }else{
        nomeADD.value = ""
        telefoneADD.value = ""
        if(favoritoADD === null || favoritoADD.value === "nao"){
            contatos.push({nome:contatoNOME,telefone:contato_numero,favorito:false})
            localStorage.setItem("contatos",JSON.stringify(contatos))
        
        }else if(favoritoADD.value === "sim"){
            contatos.push({nome:contatoNOME,telefone:contato_numero,favorito:true})
            localStorage.setItem("contatos",JSON.stringify(contatos))
        }
    }
}

let controlemensagem = null

function mostrar_mensagemERRo(){
    
    if (controlemensagem !== null) {
        clearTimeout(controlemensagem)
    }
    
    mensagemERRo.innerText = "Preencha os campos vazios!"
    mensagemERRo.style.visibility = "visible"
    
    controlemensagem = setTimeout(function () {
        
        mensagemERRo.style.visibility = "hidden"
        controlemensagem = null
        
    }, 3000);
    
}

function mensagemNUMEROinvalido(){
    
    if (controlemensagem !== null) {
        clearTimeout(controlemensagem)
    }
    
    mensagemERRo.innerText = "Número inválido"
    mensagemERRo.style.visibility = "visible"
    telefoneADD.value = ""
    nomeADD.value = ""
    
    controlemensagem = setTimeout(function () {
        
        mensagemERRo.style.visibility = "hidden"
        controlemensagem = null
        
    }, 3000);
    
}

let indice = []

function excluircontato(){
    h2.style.visibility = "hidden"
    contador = 0
    
    for(let i = 0; i < remover_Visualmente.length; i++){
        remover_Visualmente[i].remove()
    }
    
    remover_Visualmente = []
    
    for(let i = 0; i < contatos.length; i++){
        
        for(let r = 0; r < remove_internamente.length; r++){
            if(remove_internamente[r].nome === contatos[i].nome && remove_internamente[r].telefone === contatos[i].telefone){
                console.log("ta entrando aqui")
                
                indice.push(i)
            }
            
        }      
        
    }
    
    for(let a = indice.length - 1; a >= 0; a--){
        contatos.splice(indice[a], 1)
        localStorage.setItem("contatos",JSON.stringify(contatos))
    }
    
    remove_internamente = []
    indice = []
}

function excluircontato_dadescricao(){
    for(let i = 0; i < contatos.length; i++){
        
        for(let a = 0; a < elementosDEscricao.length; a++){
        
                if(elementosDEscricao[a].nome === contatos[i].nome && elementosDEscricao[a].telefone === contatos[i].telefone){
                    contatos.splice(i,1)
                    localStorage.setItem("contatos",JSON.stringify(contatos))
                }
            }
        }
        mostrarContatos()
        elementosDEscricao = []
        
        conteudodescricao.innerText = ""
        conteinerdescricao.style.display = "none"
        conteiner_principal.style.display = "grid"
}

function conteinerFavorito(){
    conteiner_principal.style.display = "none"
    conteiner_favorito.style.display = "flex"
    
    contatos.sort((nome1,nome2) => nome1.nome.localeCompare(nome2.nome))
    
    const favorito = contatos.filter(favoritos => favoritos.favorito === true)

    if(favorito.length === 0){
        const h3 = document.createElement("h3")
            h3.innerText = "não a contatos marcados como farovitos"
            mostrarfavoritos.appendChild(h3)
    }else{
        favorito.forEach(contatosfavoritos =>{
            const card = document.createElement("div")
            const nome  = document.createElement("h3")
            const numero = document.createElement("p")
    
            nome.innerText = contatosfavoritos.nome
            numero.innerText = contatosfavoritos.telefone
            card.appendChild(nome)
            card.appendChild(numero)
            mostrarfavoritos.appendChild(card)
        })

}

}

function voltardaJAneLAfavoritos(){
    mostrarfavoritos.innerText = "" 
    conteiner_favorito.style.display = "none"
    conteiner_principal.style.display = "grid"
}

function adicionarAOSfavoritos(){    
    let remover_classe = document.querySelectorAll(".selecionado")
    
    remover_classe.forEach(remover =>{
        remover.classList.remove("selecionado")
    })
    
    for(let adicionar of remove_internamente){
        console.log(contatos)
        for(let contatoclicado of contatos){
            
            if(contatoclicado.nome === adicionar.nome && contatoclicado.telefone === adicionar.telefone){
                contatoclicado.favorito = !contatoclicado.favorito
                break;
            }
        }
        
    }
    
    remove_internamente = []
    remover_Visualmente = []
    h2.innerText = `${0} selecionado(s)`
    contador = 0

}

function alterarfavorito(){
    for(let alterar of elementosDEscricao){
        
        for(let alterarfavorito of contatos){
            
            if(alterar.nome === alterarfavorito.nome && alterar.telefone === alterarfavorito.telefone){
                alterarfavorito.favorito = !alterarfavorito.favorito
                
                conteudodescricao.innerText = ""
                
                atualizardescricao()

        }
    }

}

}

function Confirma_pesquisa(){
    resultado_dapesquisa.innerText = ""
    origemDescricao = "tela de pesquisa"
    const contato_pesquisado = document.querySelector("input[name='contato-pesquisado']")
    if(contato_pesquisado.value.trim() === ""){
        return
    }

    const resultadopesquisa = contatos.filter(pesquisado => pesquisado.nome.toLowerCase().startsWith(contato_pesquisado.value.toLowerCase()))
    
    if(resultadopesquisa.length === 0){
            const h3 = document.createElement("h3")
            h3.innerText = "contato não encontrado"
            resultado_dapesquisa.appendChild(h3)
    }else{
        resultadopesquisa.forEach(contatos_encontrados =>{
            const card = document.createElement("div")
            const nome = document.createElement("h3")
            const numero = document.createElement("p")

            nome.innerText = contatos_encontrados.nome
            numero.innerText = contatos_encontrados.telefone
            
            card.appendChild(nome)
            card.appendChild(numero)
            resultado_dapesquisa.appendChild(card)
            card.addEventListener("click",function(event){
                if(!modoselecao){
                    descricaoDOcontato(event)
                }
            })
        })
    }
}

function voltar_deDescrisaoPARA_pesquisar(){
    conteudodescricao.innerText = ""
    conteinerdescricao.style.display = "none"
    pesquisar_contato.style.display = "flex"
    elementosDEscricao = []
}

function alterar_entre_janelasdescricao_e_pesquisar(){
    if(origemDescricao === "tela de pesquisa"){
        voltar_deDescrisaoPARA_pesquisar()
    }else{
        voltardajaneladescricao()
    }
}

function conteinerpaginaEdicao(){
    conteinerdescricao.style.display = "none"
    conteinerEdicao.style.display = "flex"
}

function comfimar_contatoEDItado(){
    if(inputnomeEDICAO.value == "" || inputelefoneEDICAO.value == ""){
        return
    
    }else if(!/^\d{11}$/.test(inputelefoneEDICAO.value)){
        return
    
    }else{
        for(let a = 0; a < elementosDEscricao.length; a++){
            
            for(let i = 0; i < contatos.length; i++){
                if(elementosDEscricao[a].nome === contatos[i].nome && elementosDEscricao[a].telefone === contatos[i].telefone){
                    contatos[i].nome = inputnomeEDICAO.value
                    contatos[i].telefone = inputelefoneEDICAO.value 
                    
                    localStorage.setItem("contatos",JSON.stringify(contatos))
                    
                    elementosDEscricao[a].nome = inputnomeEDICAO.value
                    elementosDEscricao[a].telefone = inputelefoneEDICAO.value
                }
            }
        }
    }
    conteudodescricao.innerText = ""
    conteinerEdicao.style.display = "none"
    conteinerdescricao.style.display = "flex"
    atualisardescricao = true
    descricaoDOcontato()

}

function cancelar_edicao(){
    conteinerEdicao.style.display = "none"
    conteinerdescricao.style.display = "flex"
}