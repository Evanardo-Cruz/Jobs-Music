var musica_cartao_visita = document.getElementById('musica_card')
var btn_cartao_visita = document.getElementById("btn_play")
var btn_ativo = "não"
btn_cartao_visita.addEventListener("click", () => {
    if (btn_ativo == "sim") {
        btn_cartao_visita.src = "./imagens/play.png"
        btn_ativo = "não"
        musica_cartao_visita.pause();
    } else {
        musica_cartao_visita.play();
        btn_cartao_visita.src = "./imagens/pause.png"
        btn_ativo = "sim"
        musicaAcabou()
    }
})

function musicaAcabou() {
    currentMusic.audio.addEventListener('ended', function (){
        window.alert("acabou")
    }) 
        
    
}