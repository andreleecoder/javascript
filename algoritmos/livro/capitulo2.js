let movie ='Lord of the Rings'
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
    
    
    
    
    


 
