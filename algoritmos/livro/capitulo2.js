/*let movie ='Lord of the Rings'
//var movie= 'Batman VS Superman'
function StarWarsFan(){
    const movie='Star Wars'
    return movie
}
function marvelFan() {
     movie ='The Avengers'
    return movie
    
}
function blizzardFan() {
    const isFan=true
    let phrase='Warcraft'
    console.log('Before is: '+phrase);
    if(isFan){
        let phrase='initial text'
        phrase='for the horde!'
        console.log('inside if: '+phrase)
    }
    phrase='for the Alliance!'
    console.log('inside if:'+phrase);
}
    console.log(movie);
    console.log(StarWarsFan());
    console.log(marvelFan());
    console.log(movie);
    blizzardFan()
//TEMPLATE LITERAL
    
//concatenação
    const livro={
        nome:'Estruturas de dados e algoritmos com javaScritpt'
    };
    //console.log('voce está lendo' + livro.nome);

//template literal
console.log(`voce está lendo ${livro.nome}., 
and this is a new line
and so this` );

//ARROW FUNCTIONS

//função tradicional
var circleAreaEs5 = function circleAreaEs5(r) {
    var PI=3.14
    var area=PI*r*r
    return area    
}
console.log(circleAreaEs5(2));

//arrow function
let circleArea = r=>{
    const PI=3.14
    const area=PI*r*r
    return area 
}
console.log(circleArea(3));
*/
function sum(x,y,z) {
    return x+y+z
}
let params=[3,4,5]
console.log(sum(...params));

function restParametersFunction(x,y,...a) {
    return (x+y)*a.length
    
}
console.log(restParametersFunction(1,2,'hello',true,7));

let [x,y]=['a','b']
let obj={x,y}
console.log(obj);

const hello={
    name:'abcdef',
    printHello(){
        console.log("hello");
        
    }
}

console.log(hello.printHello());



 



    

    
    
    
    
    


 
