var musica_cartao_visita = document.getElementById('musica_card')
var btn_cartao_visita = document.getElementById("btn_play")
var btn_ativo = "não"
btn_cartao_visita.addEventListener("click", () => {
    if (btn_ativo == "sim") {
        btn_cartao_visita.src = "./imagens/play.png"
        btn_ativo = "não"
        musica_cartao_visita.pause();
    } else {
        umaDeCadaVez(1)
        musica_cartao_visita.play();
        btn_cartao_visita.src = "./imagens/pause.png"
        btn_ativo = "sim"
    }
})

var musica_jorge_capadocia = document.getElementById('musica_card_jorge_capadocia')
var btn_jorge_capadocia = document.getElementById("btn_play_jorge_capadocia")
var btn_ativo2 = 'não'
btn_jorge_capadocia.addEventListener('click', () => {
    if (btn_ativo2 == 'sim') {
        btn_jorge_capadocia.src = "./imagens/play.png"
        btn_ativo2 = 'não'
        musica_jorge_capadocia.pause();
    } else {
        umaDeCadaVez(2)
        musica_jorge_capadocia.play();
        btn_jorge_capadocia.src = "./imagens/pause.png"
        btn_ativo2 = 'sim'
    }
})

var musica_canao = document.getElementById('musica_card_canao')
var btn_canao = document.getElementById("btn_play_canao")
var btn_ativo3 = 'não'
btn_canao.addEventListener('click', () => {
    if (btn_ativo3 == 'sim') {
        btn_canao.src = "./imagens/play.png"
        btn_ativo3 = 'não'
        musica_canao.pause();
    } else {
        umaDeCadaVez(3)
        musica_canao.play();
        btn_canao.src = "./imagens/pause.png"
        btn_ativo3 = 'sim'
    }
})

var musica_intro = document.getElementById('musica_card_intro')
var btn_intro = document.getElementById("btn_play_intro")
var btn_ativo4 = 'não'
btn_intro.addEventListener('click', () => {
    if (btn_ativo4 == 'sim') {
        btn_intro.src = "./imagens/play.png"
        btn_ativo4 = 'não'
        musica_intro.pause();
    } else {
        umaDeCadaVez(4)
        musica_intro.play();
        btn_intro.src = "./imagens/pause.png"
        btn_ativo4 = 'sim'
    }
})

var musica_mina_condominio = document.getElementById('musica_card_mina_condominio')
var btn_mina_condominio = document.getElementById("btn_play_mina_condominio")
var btn_ativo5 = 'não'
btn_mina_condominio.addEventListener('click', () => {
    if (btn_ativo5 == 'sim') {
        btn_mina_condominio.src = "./imagens/play.png"
        btn_ativo5 = 'não'
        musica_mina_condominio.pause();
    } else {
        umaDeCadaVez(5)
        musica_mina_condominio.play();
        btn_mina_condominio.src = "./imagens/pause.png"
        btn_ativo5 = 'sim'
    }
})

var musica_exagerado = document.getElementById('musica_card_exagerado')
var btn_exagerado = document.getElementById("btn_play_exagerado")
var btn_ativo6 = 'não'
btn_exagerado.addEventListener('click', () => {
    if (btn_ativo6 == 'sim') {
        btn_exagerado.src = "./imagens/play.png"
        btn_ativo6 = 'não'
        musica_exagerado.pause();
    } else {
        umaDeCadaVez(6)
        musica_exagerado.play();
        btn_exagerado.src = "./imagens/pause.png"
        btn_ativo6 = 'sim'
    }
})

var musica_vou_deixar = document.getElementById('musica_card_vou_deixar')
var btn_vou_deixar = document.getElementById("btn_play_vou_deixar")
var btn_ativo7 = 'não'
btn_vou_deixar.addEventListener('click', () => {
    if (btn_ativo7 == 'sim') {
        btn_vou_deixar.src = "./imagens/play.png"
        btn_ativo7 = 'não'
        musica_vou_deixar.pause();
    } else {
        umaDeCadaVez(7)
        musica_vou_deixar.play();
        btn_vou_deixar.src = "./imagens/pause.png"
        btn_ativo7 = 'sim'
    }
})

var musica_tempo_perdido = document.getElementById('musica_card_tempo_perdido')
var btn_tempo_perdido = document.getElementById("btn_play_tempo_perdido")
var btn_ativo8 = 'não'
btn_tempo_perdido.addEventListener('click', () => {
    if (btn_ativo8 == 'sim') {
        btn_tempo_perdido.src = "./imagens/play.png"
        btn_ativo8 = 'não'
        musica_tempo_perdido.pause();
    } else {
        umaDeCadaVez(8)
        musica_tempo_perdido.play();
        btn_tempo_perdido.src = "./imagens/pause.png"
        btn_ativo8 = 'sim'
    }
})

var musica_solto = document.getElementById('musica_card_solto')
var btn_solto = document.getElementById("btn_play_solto")
var btn_ativo9 = 'não'
btn_solto.addEventListener('click', () => {
    if (btn_ativo9 == 'sim') {
        btn_solto.src = "./imagens/play.png"
        btn_ativo9 = 'não'
        musica_solto.pause();
    } else {
        umaDeCadaVez(9)
        musica_solto.play();
        btn_solto.src = "./imagens/pause.png"
        btn_ativo9 = 'sim'
    }
})

var musica_libertarios = document.getElementById('musica_card_libertarios')
var btn_libertarios = document.getElementById("btn_play_libertarios")
var btn_ativo10 = 'não'
btn_libertarios.addEventListener('click', () => {
    if (btn_ativo10 == 'sim') {
        btn_libertarios.src = "./imagens/play.png"
        btn_ativo10 = 'não'
        musica_libertarios.pause();
    } else {
        umaDeCadaVez(10)
        musica_libertarios.play();
        btn_libertarios.src = "./imagens/pause.png"
        btn_ativo10 = 'sim'
    }
})

var musica_amor_puro = document.getElementById('musica_card_amor_puro')
var btn_amor_puro = document.getElementById("btn_play_amor_puro")
var btn_ativo11 = 'não'
btn_amor_puro.addEventListener('click', () => {
    if (btn_ativo11 == 'sim') {
        btn_amor_puro.src = "./imagens/play.png"
        btn_ativo11 = 'não'
        musica_amor_puro.pause();
    } else {
        umaDeCadaVez(11)
        musica_amor_puro.play();
        btn_amor_puro.src = "./imagens/pause.png"
        btn_ativo11 = 'sim'
    }
})

var musica_sujeito = document.getElementById('musica_card_sujeito')
var btn_sujeito = document.getElementById("btn_play_sujeito")
var btn_ativo12 = 'não'
btn_sujeito.addEventListener('click', () => {
    if (btn_ativo12 == 'sim') {
        btn_sujeito.src = "./imagens/play.png"
        btn_ativo12 = 'não'
        musica_sujeito.pause();
    } else {
        umaDeCadaVez(12)
        musica_sujeito.play();
        btn_sujeito.src = "./imagens/pause.png"
        btn_ativo12 = 'sim'
    }
})

var musica_ligacoes = document.getElementById('musica_card_ligacoes')
var btn_ligacoes = document.getElementById("btn_play_ligacoes")
var btn_ativo13 = 'não'
btn_ligacoes.addEventListener('click', () => {
    if (btn_ativo13 == 'sim') {
        btn_ligacoes.src = "./imagens/play.png"
        btn_ativo13 = 'não'
        musica_ligacoes.pause();
    } else {
        umaDeCadaVez(13)
        musica_ligacoes.play();
        btn_ligacoes.src = "./imagens/pause.png"
        btn_ativo13 = 'sim'
    }
})

var musica_descobridor = document.getElementById('musica_card_descobridor')
var btn_descobridor = document.getElementById("btn_play_descobridor")
var btn_ativo14 = 'não'
btn_descobridor.addEventListener('click', () => {
    if (btn_ativo14 == 'sim') {
        btn_descobridor.src = "./imagens/play.png"
        btn_ativo14 = 'não'
        musica_descobridor.pause();
    } else {
        umaDeCadaVez(14)
        musica_descobridor.play();
        btn_descobridor.src = "./imagens/pause.png"
        btn_ativo14 = 'sim'
    }
})

var musica_voce = document.getElementById('musica_card_voce')
var btn_voce = document.getElementById("btn_play_voce")
var btn_ativo15 = 'não'
btn_voce.addEventListener('click', () => {
    if (btn_ativo15 == 'sim') {
        btn_voce.src = "./imagens/play.png"
        btn_ativo15 = 'não'
        musica_voce.pause();
    } else {
        umaDeCadaVez(15)
        musica_voce.play();
        btn_voce.src = "./imagens/pause.png"
        btn_ativo15 = 'sim'
    }
})

var musica_sonho = document.getElementById('musica_card_sonho')
var btn_sonho = document.getElementById("btn_play_sonho")
var btn_ativo16 = 'não'
btn_sonho.addEventListener('click', () => {
    if (btn_ativo16 == 'sim') {
        btn_sonho.src = "./imagens/play.png"
        btn_ativo16 = 'não'
        musica_sonho.pause();
    } else {
        umaDeCadaVez(16)
        musica_sonho.play();
        btn_sonho.src = "./imagens/pause.png"
        btn_ativo16 = 'sim'
    }
})

var musica_titans = document.getElementById('musica_card_titans')
var btn_titans = document.getElementById("btn_play_titans")
var btn_ativo17 = 'não'
btn_titans.addEventListener('click', () => {
    if (btn_ativo17 == 'sim') {
        btn_titans.src = "./imagens/play.png"
        btn_ativo17 = 'não'
        musica_titans.pause();
    } else {
        umaDeCadaVez(17)
        musica_titans.play();
        btn_titans.src = "./imagens/pause.png"
        btn_ativo17 = 'sim'
    }
})

var musica_amo = document.getElementById('musica_card_amo')
var btn_amo = document.getElementById("btn_play_amo")
var btn_ativo18 = 'não'
btn_amo.addEventListener('click', () => {
    if (btn_ativo18 == 'sim') {
        btn_amo.src = "./imagens/play.png"
        btn_ativo18 = 'não'
        musica_amo.pause();
    } else {
        umaDeCadaVez(18)
        musica_amo.play();
        btn_amo.src = "./imagens/pause.png"
        btn_ativo18 = 'sim'
    }
})

var musica_gelo = document.getElementById('musica_card_gelo')
var btn_gelo = document.getElementById("btn_play_gelo")
var btn_ativo19 = 'não'
btn_gelo.addEventListener('click', () => {
    if (btn_ativo19 == 'sim') {
        btn_gelo.src = "./imagens/play.png"
        btn_ativo19 = 'não'
        musica_gelo.pause();
    } else {
        umaDeCadaVez(19)
        musica_gelo.play();
        btn_gelo.src = "./imagens/pause.png"
        btn_ativo19 = 'sim'
    }
})

var musica_cerol = document.getElementById('musica_card_cerol')
var btn_cerol = document.getElementById("btn_play_cerol")
var btn_ativo20 = 'não'
btn_cerol.addEventListener('click', () => {
    if (btn_ativo20 == 'sim') {
        btn_cerol.src = "./imagens/play.png"
        btn_ativo20 = 'não'
        musica_cerol.pause();
    } else {
        umaDeCadaVez(20)
        musica_cerol.play();
        btn_cerol.src = "./imagens/pause.png"
        btn_ativo20 = 'sim'
    }
})

function umaDeCadaVez(n) {
    if (n != 1) {
        btn_cartao_visita.src = "./imagens/play.png"
        btn_ativo = "não"
        musica_cartao_visita.pause();
    }
    if (n != 2) {
        btn_jorge_capadocia.src = "./imagens/play.png"
        btn_ativo2 = 'não'
        musica_jorge_capadocia.pause();
    }
    if (n != 3) {
        btn_canao.src = "./imagens/play.png"
        btn_ativo3 = 'não'
        musica_canao.pause();
    }
    if (n != 4) {
        btn_intro.src = "./imagens/play.png"
        btn_ativo4 = 'não'
        musica_intro.pause();
    }
    if (n != 5) {
        btn_mina_condominio.src = "./imagens/play.png"
        btn_ativo5 = 'não'
        musica_mina_condominio.pause();
    }
    if (n != 6) {
        btn_exagerado.src = "./imagens/play.png"
        btn_ativo6 = 'não'
        musica_exagerado.pause();
    }
    if (n != 7) {
        btn_vou_deixar.src = "./imagens/play.png"
        btn_ativo7 = 'não'
        musica_vou_deixar.pause();
    }
    if (n != 8) {
        btn_tempo_perdido.src = "./imagens/play.png"
        btn_ativo8 = 'não'
        musica_tempo_perdido.pause();
    }
    if (n != 9) {
        btn_solto.src = "./imagens/play.png"
        btn_ativo9 = 'não'
        musica_solto.pause();
    }
    if (n != 10) {
        btn_libertarios.src = "./imagens/play.png"
        btn_ativo10 = 'não'
        musica_libertarios.pause();
    }
    if (n != 11) {
        btn_amor_puro.src = "./imagens/play.png"
        btn_ativo11 = 'não'
        musica_amor_puro.pause();
    }
    if (n != 12) {
        btn_sujeito.src = "./imagens/play.png"
        btn_ativo12 = 'não'
        musica_sujeito.pause();
    }
    if (n != 13) {
        btn_ligacoes.src = "./imagens/play.png"
        btn_ativo13 = 'não'
        musica_ligacoes.pause();
    }
    if (n != 14) {
        btn_descobridor.src = "./imagens/play.png"
        btn_ativo14 = 'não'
        musica_descobridor.pause();
    }
    if (n != 15) {
        btn_voce.src = "./imagens/play.png"
        btn_ativo15 = 'não'
        musica_voce.pause();
    }
    if (n != 16) {
        btn_sonho.src = "./imagens/play.png"
        btn_ativo16 = 'não'
        musica_sonho.pause();
    }
    if (n != 17) {
        btn_titans.src = "./imagens/play.png"
        btn_ativo17 = 'não'
        musica_titans.pause();
    }
    if (n != 18) {
        btn_amo.src = "./imagens/play.png"
        btn_ativo18 = 'não'
        musica_amo.pause();
    }
    if (n != 19) {
        btn_gelo.src = "./imagens/play.png"
        btn_ativo19 = 'não'
        musica_gelo.pause();
    }
    if (n != 20) {
        btn_cerol.src = "./imagens/play.png"
        btn_ativo20 = 'não'
        musica_cerol.pause();
    }
}