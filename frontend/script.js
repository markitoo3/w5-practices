/* console.log(a)
console.log(c)
 */

// console.log("Hello")
// console.log('Sima')
// console.log(`back
// tick`)

// console.log(typeof 2)
// console.log(typeof NaN)
// console.log(0/0)
// console.log(2.14)

// console.log(true)
// console.log(false)

// console.log(undefined)
// console.log(null)

// console.log(typeof undefined)
// console.log(typeof null)
/* 
console.log({
    "title": "Start Coding",
    "type": "Solo,",
    "difficulty": 4.1,
    "usefulness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {
            "title": "bank accounts",
            "description": ""
        },
        {
            "title": "100 doors",
            "description": ""
        },
        {
            "title": "word filter",
            "description": ""
        }
    ]
})
 */

/* var a = "Hello1"
let b = "Hello2"
const c = "Hello3"

console.log(a)
console.log(b)
console.log(c) */

/* global scope
function scope
block scope
 */

/* ez a function scope*/

/* function d(){
    if(1+1 === 2){
    }
    var a = "Hello1"
    let b = "Hello2"
    const c = "Hello3"
    console.log(a)
    console.log(b)
    console.log(c)
}
d() */

/* let e = 1
console.log(e)
e = 2
console.log(e)
e = e*2
console.log(e) */

/* function multiplyByTwo(num){
    console.log(num)
    return num*2
}
let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1)); */

/* let g = {
    myMethod: function(){
        console.log("Hello");
    }
}
g.myMethod()

let window = {
    addEventListener: function(eventName, evenFunction){
        if (eventName === "load"){
            evenFunction()
        }
    }
}
window.addEventListener("load", loadEvent) nem fog műküdni, csak példa */

/* let h = {
    anotherMethod: function(text){
        return `You sent the following argument to this method: ${text}`
    }
}
let i = h.anotherMethod("argument")
console.log(i)
console.log(h.anotherMethod("another argument")) */

/* let myString = "Mikkamakka";

let mySecondString = myString;

let myThirdString = "Mikkamakka"

console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString); */

/* let myObject = {
    myString: "Mikkamakka"
};

let mySecondObject = myObject

let myThirdObject = {
    myString: "Mikkamakka"
};

mySecondObject.myString = "dömdödöm";

let myFourthObject = {...myObject};

myFourthObject.myString = "Vacskamati";

console.log(myObject.myString);
console.log(myFourthObject.myString); */

/* console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject);

console.log(myObject.myString === myThirdObject.myString);
 */
/* console.log("" === "");
console.log({} === {}); */


/* window.addEventListener("load", function(){
    console.log("My first load event")
})
 */

function loadEvent() {
    let rootElement = document.getElementById("root")

    let card2 = function(title, year, rate){
        return `
        <div class="card">
            <p class="title">${title}</p>
            <p class="year">${year}</p>
            <p class="rate">${rate}</p>
        </div>
        `;      
    }

    let renderAllCardElements = function (incomingMoviesArray) {
        let renderCardList = `<div class="cards">`;
        //for ciklus ami végigmegy a cardsArray-en, amit paraméterként kaptunk meg
        for (const incomingMovie of incomingMoviesArray) {
            //for ciklus minden lépcsőjénél hozzáadja a renderCardList-hez az adott elemet a megfelelő div cardban

            renderCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)

            /* renderCardList += `
            <div class="card">
                <p class="title">${incomingMovie.title}</p>
                <p class="year">${incomingMovie.year}</p>
                <p class="rate">${incomingMovie.rate}</p>
            </div>
            ` */
        }
        renderCardList += `</div>`
        console.log(renderCardList);
        return renderCardList;
        //returnöli az elkészült elemekkel feltöltött cardList-et
        
    }

    /* movies.sort(function(a, b){return a.year - b.year}); rendezés számszerint */
    let newGoodMovies = [];

    for (const movieSend of movies) {    
        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend)
        }
    }
    newGoodMovies.sort(function(a, b){return a.year - b.year});
    
    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies))
}

window.addEventListener("load", loadEvent)

