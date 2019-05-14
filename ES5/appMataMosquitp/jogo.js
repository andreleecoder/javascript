var altura=0
var largura =0
var vidas=1
var tempo=15

//niveis do jogo
var criaMosquitoTempo=1500//1,5seg

//acessar os valores dos niveis
var nivel=window.location.search
nivel=nivel.replace('?','')

//lógica de mudança de nivel
if(nivel==='normal'){
    criaMosquitoTempo=1500
}if(nivel==='dificil'){
    criaMosquitoTempo=1000//1seg
}if(nivel==='chucknorris'){
    criaMosquitoTempo=750//1/3 de segundo
}

//captar o tamanho da tela do browser
 function ajustaTamanhoTela(){
    altura=window.innerHeight 
    largura=window.innerWidth
    console.log(altura,largura)
 }
 ajustaTamanhoTela()

 //criando cronometro
 var cronometro = setInterval(function(){
        
        tempo -= 1 
        
        if(tempo < 0){
            clearInterval(cronometro)
            clearInterval(criaMosquito)
            window.location.href="vitoria.html"
        }else{
         document.getElementById("cronos").innerHTML=tempo
        }
        
     }, 1000)

// movimentação aleatoria do mosquito
 
 function posicaoRandomica(){

     //remover o mosquito anterior (caso exista)
     if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
     //de coração cheio para vazio(perdeu uma vida)
     if(vidas>3){
         window.location.href="fim_de_jogo.html"
     }else{
     document.getElementById('v'+vidas).src="./imagens/coracao_vazio.png"
       vidas++}
     }
     var posicaox=Math.floor(Math.random() * largura)-90
     var posicaoy=Math.floor(Math.random() * altura)-90
     
     posicaox=posicaox < 0 ? 0:posicaox

     var posicaox=Math.floor(Math.random()*largura)-90
     var posicaoy=Math.floor(Math.random()*altura)-90
     posicaox=posicaox<0?0:posicaox

     posicaoy=posicaoy<0?0:posicaoy

     console.log(posicaox,posicaoy)
     
     //criando elemento html dentro do javascript
     var mosquito=document.createElement('img')
     mosquito.src='./imagens/mosca.png'
     mosquito.className=tamanhoAleatorio()+ ' '+ladoAleatorio()

     mosquito.style.left=posicaox +'px'
     mosquito.style.top=posicaoy +'px'
     mosquito.style.position='absolute'
     mosquito.id='mosquito'

     mosquito.style.left=posicaox+'px'
     mosquito.style.top=posicaoy+'px'
     mosquito.style.position='absolute'
     mosquito.onclick=function(){
         this.remove()
     }

     document.body.appendChild(mosquito)
 }
 //Alterando o tamanho do mosquito aleatoriamanete
 function tamanhoAleatorio(){
     var classe = Math.floor(Math.random()*3)
     switch(classe){
         case 0:
         return 'mosquito1'
         case 1:
         return 'mosquito2'
         case 2:
         return 'mosquito3'
     }
 }
 //espelhando a imagem do mosquito
 function ladoAleatorio(){
     var classe = Math.floor(Math.random()*2)
     switch(classe){
         case 0:
         return 'ladoA'
         case 1:
         return 'ladoB'
     }
 }