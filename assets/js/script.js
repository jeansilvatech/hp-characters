
const content = document.querySelector('.content')
const loading = document.querySelector('.loading')
const contentCards = document.querySelector('.content .characters')

const btnHouse = document.querySelectorAll('.buttons button')
const res = await fetch("https://hp-api.onrender.com/api/characters")
const data = await res.json();
let bgCard = ""
let iconHouse = ""
setInterval(() => {
    loading.style.display = 'none'
    content.style.display = 'flex'
}, 8000);
data.map( async(characters)=>{
    
    const imgDefault = "../assets/img/img-default.png"
   
        switch(characters.house){
            case "Gryffindor":
                iconHouse ="../assets/img/Gryffindor.webp"
                bgCard = "#B22222"
            break;
            case "Slytherin":
                iconHouse ="../assets/img/Slytherin.webp"
                bgCard = "#228B22"
            break;
            case "Hufflepuff":
                iconHouse ="../assets/img/Hufflepuff.webp"
                bgCard = "#B8860B"
            break;
            case "Ravenclaw":
                iconHouse ="../assets/img/Ravenclaw.webp"
                bgCard = "#1E90FF"
            break;
            default:
                iconHouse ="../assets/img/default.webp"
                bgCard = "#1C1C1C"
                break;
    
        }
        contentCards.innerHTML+=`
        <div class="card-character ${characters?.house}" style="background-color:${bgCard} ;">
                <img src="${characters.image ===""?imgDefault:characters.image}" alt="" class="character-img">
                <h2 class="name-character">${characters.name}</h2>
                <p class="name-actor center"><span>${characters?.actor}</span></p>
                <img src="${iconHouse}" class="house-character" title="${characters?.house}" alt="Icon house ${characters.house}">
                <span>${characters?.house}</span>
                </div>
        `
})
const card = document.querySelectorAll('.card-character')
btnHouse.forEach((btn)=>{
    
    switch(btn.name){
        case "Gryffindor":
            bgCard = "#B22222"
        break;
        case "Slytherin":
            bgCard = "#228B22"
        break;
        case "Hufflepuff":
            bgCard = "#B8860B"
        break;
        case "Ravenclaw":
            bgCard = "#1E90FF"
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
           }else{
            cardList.style.display = 'none'
           }
           
        })
    })
})

