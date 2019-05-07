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
     mosquito.className='mosquito1'

     mosquito.style.left=posicaox +'px'
     mosquito.style.top=posicaoy +'px'
     mosquito.style.position='absolute'
     

     mosquito.style.left=posicaox+'px'
     mosquito.style.top=posicaoy+'px'
     mosquito.style.position='absolute'

     document.body.appendChild(mosquito)
 }