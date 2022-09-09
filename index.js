
var final = Number(document.getElementById('numeroFinal').value)
var pular = document.getElementById('numeroPular')
var msg = document.getElementById('msg')
var btn = document.getElementById('btn')

btn.addEventListener("click", Clicou)

function Clicou(){
    var inicial = Number(document.getElementById('numeroInicial').value)
    msg.innerHTML = ''
    for(inicial; inicial <= final; inicial++){
        msg.append('oi')
        console.log(inicial)
    }
}