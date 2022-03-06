


//1.1 comento countries para que no haya conflicto con el de abajo


// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];  

// let ul = document.createElement("ul")

// for( let country of countries){

//     let li = document.createElement("li")
//     li.innerHTML = country
//     ul.appendChild(li)

// }

// document.body.appendChild(ul)

//1.2

let targetElement = document.querySelector(".fn-remove-me");

let parent = targetElement.parentElement;

parent.removeChild(targetElement)

//1.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div = document.querySelector("[data-function='printHere']")
let ulTag = document.createElement("ul");

for(let car of cars){
    let li = document.createElement("li")
    li.innerHTML = car;
    ulTag.appendChild(li);
}

 div.appendChild(ulTag)


//1.4

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let country of countries){

    let div = document.createElement("div")
        div.setAttribute("class", "randImage")
    let h4 = document.createElement("h4")
        h4.innerHTML = country.title;

    let image = document.createElement("img")
       image.setAttribute("src", country.imgUrl)

    div.appendChild(h4)
    div.appendChild(image)

    document.body.appendChild(div)

}

//1.5

let button = document.createElement("button")

button.innerHTML = "delete last element"

document.body.appendChild(button)

button.addEventListener("click", function(){

let listDiv = document.querySelectorAll("div")

let lastDiv = listDiv[listDiv.length - 1]

let parent = lastDiv.parentElement;

parent.removeChild(lastDiv)

})

//1.6

let randomImg = document.querySelectorAll(".randImage")

for(let i = 0; i < randomImg.length; i++){
    let btn = document.createElement("button")
       btn.innerHTML = "Delete"
       randomImg[i].appendChild(btn)

}

let imgButtons = document.querySelectorAll(".randImage button");

for(let i = 0; i < imgButtons.length; i++){

    imgButtons[i].addEventListener("click", function(){

        let parent = randomImg[i].parentElement;
        parent.removeChild(randomImg[i])
    })
}























