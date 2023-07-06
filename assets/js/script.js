const content = document.querySelector('.content')
const loading = document.querySelector('.loading')
const contentCards = document.querySelector('.content .characters')
const btnHouse = document.querySelectorAll('.buttons button')
const arrow = document.querySelector('.arrow')
const title = document.querySelector('main h1')
const home = document.querySelector('main')
let bgCard = ""
let iconHouse = ""
let data = [];
const colors = {
    Gryffindor: "#740001",
    Slytherin: "#1a472a",
    Hufflepuff: "#8E6F22",
    Ravenclaw: "#0B607E"
}
window.addEventListener('scroll', ()=>{
    arrow.classList.toggle('rotate-arrow', window.scrollY >0)
    title.classList.toggle('scroll-title', window.scrollY >0)
    home.classList.toggle('scroll-home', window.scrollY >0)
})
async function api(){
    try{
    const res = await fetch("https://hp-api.onrender.com/api/characters")
    data = await res.json();
    render(data)
    }catch(err){
        console.log(err)
    }
}    
function btnRenderHouse(){
    const card = document.querySelectorAll('.card-character')
    btnHouse.forEach((btn)=>{
    switch(btn.name){
        case "Gryffindor":
            bgCard = colors.Gryffindor;
        break;
        case "Slytherin":
            bgCard = colors.Slytherin
        break;
        case "Hufflepuff":
            bgCard = colors.Hufflepuff
        break;
        case "Ravenclaw":
            bgCard = colors.Ravenclaw
        break;
        default:
            bgCard = "#1C1C1C"
            break;

    }
    btn.style.backgroundColor = bgCard
    btn.addEventListener('click', ()=>{
        
        card.forEach((cardList)=>{
        const house =cardList.classList.contains(btn.name)
           if(house === true){
            cardList.style.display = 'flex'
            cardList.classList.add('enter-card')
           }else{
            cardList.style.display = 'none'
           }
           
        })
    })
})
}

let render = (dataCharacters)=>{
    const responseApi = dataCharacters.map((characters)=>{
    
        const imgDefault = "../assets/img/img-default.png"
       
            switch(characters.house){
                case "Gryffindor":
                    iconHouse ="../assets/img/Gryffindor.webp"
                    bgCard = colors.Gryffindor
                break;
                case "Slytherin":
                    iconHouse ="../assets/img/Slytherin.webp"
                    bgCard = colors.Slytherin
                break;
                case "Hufflepuff":
                    iconHouse ="../assets/img/Hufflepuff.webp"
                    bgCard = colors.Hufflepuff
                break;
                case "Ravenclaw":
                    iconHouse ="../assets/img/Ravenclaw.webp"
                    bgCard = colors.Ravenclaw
                break;
                default:
                    iconHouse ="../assets/img/default.webp"
                    bgCard = "#1C1C1C"
                    break;
            }
            return `
            <div class="card-character ${characters?.house}" style="background-color:${bgCard} ;">
                <img src="${characters.image ===""?imgDefault:characters.image}" alt="" class="character-img">
                <h2 class="name-character">${characters.name}</h2>
                <p class="name-actor center"><span>${characters?.actor}</span></p>
                <img src="${iconHouse}" class="house-character" title="${characters?.house}" alt="Icon house ${characters.house}">
                <span class="house-name">${characters?.house}</span>
            </div>
            `
    }).join("")
    contentCards.innerHTML = responseApi;
    btnRenderHouse()
}
api()


