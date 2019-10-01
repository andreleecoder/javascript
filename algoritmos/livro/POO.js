// programação orientada a objetos com classes
class Book{
    constructor(title,pages,isbn ){
        this.title=title
        this.pages=pages
        this.isbn=isbn
    }
    printisbn(){
        console.log(this.isbn);
        
    }

}
let book=new Book('titulo','paginas','isbn')
//console.log(book.printisbn('não é'));

//herança
class ItBook extends Book{
    constructor(title,pages,isbn,technology){
    super(title,pages,isbn)
    this.technology=technology
}
printTechnology(){
    console.log(this.technology)
    
    }

}

let jsBook=new ItBook('Learning JS algorithms','200','1234567890','JavaScript')
//console.log(jsBook.title)
//console.log(jsBook.printTechnology());
//getters and setters

class Person{
    constructor(name){
        this._name=name
    }
    get name(){
        return this._name
    }
    set name(value){
        this._name=value
    }
}

let lotchar=new Person('Frodo')
console.log(lotchar.name)
lotchar.name='Gandalf'
console.log(lotchar.name)
lotchar._name='Sam'
console.log(lotchar.name)





 



    

    
    
    
    
    


 
