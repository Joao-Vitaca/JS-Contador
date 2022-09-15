export default  clicouBotao
function clicouBotao(){
    let inicial = Number(document.getElementById('numeroInicial').value)
    let final = Number(document.getElementById('numeroFinal').value)
    let pular = Number(document.getElementById('numeroPular').value)
    let msg = document.getElementById('msg')   
    msg.innerHTML = '' 

    if(inicial == 0 || final == 0 || pular < 0){
        window.alert('Erro')
    }else{
        if(pular == 0){
            pular = 1
        }
        msg.innerHTML = `Contando: `
        if(inicial < final ){
            for(inicial; inicial < final; inicial+=pular){
            msg.innerHTML += `${inicial}\u{1F448} `  
            }
        }else{
            for(inicial; inicial > final; inicial-=pular){
                msg.innerHTML += `${inicial}\u{1F448} `  
                }
        }
        if(inicial === final){
            msg.innerHTML +=  `${inicial}\u{1F448}`
        }
            msg.innerHTML += 'Fim!'
    }
}
