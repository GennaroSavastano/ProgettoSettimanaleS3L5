/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("esercizio A")

let sum = (10 + 20);
console.log(sum)

console.log("********************************************************")

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("esercizio B")

let random = Math.round(Math.random()*20)
console.log(random)


console.log("********************************************************")

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("esercizio C")

let me = {
  name:"Gennaro",
  surname:"Savastano",
  age: 38,
}

console.log(me)

console.log("********************************************************")

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("esercizio D")

//spero programmaticamente significhi questo
function cancellaAge (){
  delete me['age']
}

cancellaAge()

// altrimenti dovrebbe andare - nel frattempo lo commento
// delete me.age

console.log(me)

console.log("********************************************************")

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("esercizio E")


// me.skills =["javascript","php","typescript"]
// oppure 

let skills="skills"
me[skills]=[]

//spero programmaticamente significhi questo
let aggiungiSkill= function (nuovaSkill){
  me.skills.push(...nuovaSkill)
}

aggiungiSkill(["javascript","php","java"])


aggiungiSkill(["typescript"])


console.log(me)

console.log("********************************************************")


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("esercizio F")

console.log("Fatto nell'esercizio precedente...controllare file js, esercizio E")

console.log("********************************************************")

// spero di non aver toppato.

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("esercizio G")

// me.skills.pop()
// oppure

let rimuoviSkill = function (){
  me.skills.pop()
}

rimuoviSkill()

console.log(me)

console.log("********************************************************")

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("esercizio 1")

let dice = function(){
   return Math.round(Math.random()*6)
}

console.log(dice())

console.log("********************************************************")

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("esercizio 2")

let whoIsBigger = function(a,b){
  if (a>b){
    return a
  } else if (a<b) {
    return b
  } else {
    return console.log("I NUMERI SONO UGUALI, INSERIRE VALORI DIFFERENTI")
  }
  
}

console.log(whoIsBigger(100,100))

console.log("********************************************************")


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("esercizio 3")

let splitMe = function(stringa){
    return stringa.split(" ")
}

console.log(splitMe("apelle figlio di apollo fece una palla di pelle di poooooooo"))

console.log("********************************************************")

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("esercizio 4")

let deleteOne = function(stringa,booleano){
  if (booleano === true){
    return stringa.slice(1)
  } else {
    return stringa.slice(0,-1)
  }
}

console.log(deleteOne("ciccio è il mio migliore amico",true))
console.log(deleteOne("ciccio è il mio migliore amico",false))

console.log("********************************************************")

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("esercizio 5")

let onlyLetters = function(stringa){
  let parole = stringa.split("")
  for(let i=0; i<parole.length; i++){
    if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9){
    parole[i] = ""}
  } 
 return parole.join("")
} 

console.log(onlyLetters("ciccio ciaooooo!!!"))


console.log("********************************************************")

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("esercizio 6")

let isThisAnEmail = function(email){
  let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  if (email.search(regex)!== -1){
    return true
  } else {
    return false
  }
}

console.log(isThisAnEmail("ciccio@gmail.com"))
console.log(isThisAnEmail("ciccio@com"))

console.log("********************************************************")


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log("esercizio 7")

let whatDayIsIt = function(){
  let giorniSettimana = [
    "Domenica",
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato",
  ]

let oggi = new Date()
let oggiGiorno = oggi.getDay()

return giorniSettimana[oggiGiorno] 

}

console.log("oggi è "+whatDayIsIt())

console.log("********************************************************")

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("esercizio 8")

let rollTheDices = function (num){
  let sum = 0
  let valori = []

  for (let i=0; i<num; i++){
    let valore = dice()
    valori.push(valore)
    sum+= valore
  }return {valori,sum}
}

console.log(rollTheDices(3))

console.log("********************************************************")

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("esercizio 11")

let deleteProp = function(ogg,prop){
  delete ogg[prop]
  return ogg
}

filmone = 
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
    imdbID: 'tt0120737',
    type: 'movie',
  }

console.log(deleteProp(filmone,"year"))


console.log("********************************************************")

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("esercizio 12")

let newestMovie = function(movies){
let filmInOrdine = movies.sort((a,b) => b.Year - a.Year)
return filmInOrdine[0] 
}

console.log(newestMovie(movies))

console.log("********************************************************")


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("esercizio 13")

let countMovies = function(){
 return movies.length
}

console.log(countMovies(movies))
console.log("********************************************************")

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("esercizio 14")

let onlyTheYears = function(){
  return movies.map(film => film.Year)
}
console.log(onlyTheYears(movies))

console.log("********************************************************")

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("esercizio 15")

let onlyInLastMillennium = function(){
  return movies.filter (movie => movie.Year <= 2000)
}

console.log(onlyInLastMillennium(movies))

console.log("********************************************************")

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("esercizio 15")

let sumAllTheYears = function(){
  return movies.reduce((somma, film) => somma + film.Year,0)
}
console.log(sumAllTheYears(movies))

console.log("********************************************************")

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("esercizio 15")



console.log("********************************************************")

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("esercizio 20")

let selectContainer = function() {
let thisContainer = document.getElementById('container')
return thisContainer
}
console.log(selectContainer)

console.log("********************************************************")

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("esercizio 21")
let selectAllTd = function(){
let tds = document.getElementsByTagName('td')
return tds
}

console.log(selectAllTd)
console.log("********************************************************")

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("esercizio 22")

let stampaTuttiTd = function (){
  let tds = document.querySelectorAll('td')
  tds.forEach(td => {
  console.log(td.textContent) 
  });
} 
console.log(stampaTuttiTd)
console.log("********************************************************")


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("esercizio 23")

let redBack = function (){
  let links = document.querySelectorAll('a')
  links.forEach(td => {
    links.style.background.color = 'red' 
    });
}

console.log(redBack)

console.log("********************************************************")

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("esercizio 24")

let newListItem = function (){
  let theList = document.querySelector('#myList')
  let newItems = document.createElement('li')
  newItems.textContent= 'ho un gran mal di testa!!!!'
  theList.appendChild(newItem)
}

console.log(newListItem)

console.log("********************************************************")

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("esercizio 25")

let svuotaLista = function (){
let theList = document.querySelector('#myList')
let listIems = document.querySelectorAll('li')

listItems.forEach(element => {
  theList.removeChild(element)
});
}

console.log(svuotaLista)

console.log("********************************************************")

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("esercizio 25")

let aggiungiClasse = function(){
 let trs = document.querySelectorAll('tr')
 trs.forEach(tr => {
  tr.classList.add('test')
 });
}

console.log(aggiungiClasse)

console.log("********************************************************")

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

