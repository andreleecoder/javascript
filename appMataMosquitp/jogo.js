var altura=0
var largura =0
//captar o tamanho da tela do browser
 
function ajustaTamanhoTela(){
    altura=window.innerHeight 
    largura=window.innerWidth
    console.log(altura,largura)
 }
 ajustaTamanhoTela()
// movimentação aleatoria do mosquito
 function posicaoRandomica(){
     //remover o mosquito anterior (caso exista)
     if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
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