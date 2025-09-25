let AlexOvechkin = {
    name: 'Alex Ovechkin',
    imgUrl: 'img/01.jpg',
    btnId: 'Alex',
}
let SidneyCrosby = {
    name: 'Sidney Crosby',
    imgUrl: 'img/02.jpg',
    btnId: 'Sidney',
}
let ConnorMacdavid = {
    name: 'Connor Macdavid',
    imgUrl: 'img/03.jpg',
    btnId: 'Connor',
}
let AustonMaththeu = {
    name: 'Auston Maththeu',
    imgUrl: 'img/04.jpg',
    btnId: 'Auston',
}
let NathanMackkimon = {
    name: 'Nathan Mackkimon',
    imgUrl: 'img/05.jpg',
    btnId: 'Nathan',
}
let VictorHeadem = {
    name: 'Victor Headem',
    imgUrl: 'img/06.jpg',
    btnId: 'Victor',
}
let Patricklaine = {
    name: 'Patric klaine',
    imgUrl: 'img/7.jpg',
    btnId: 'Patric',
}
let NikitaChuchor = {
    name: 'Nikita Chuchor',
    imgUrl: 'img/08.jpg',
    btnId: 'Nikita',
}
let MarioLemieux = {
    name: 'Mario Lemieux',
    imgUrl: 'img/09.jpg',
    btnId: 'Mario',
}

let noli = 0; 

function displayCard(card){
    const maindisplay = document.getElementById("cardcontainer");
    const creatediv = document.createElement("div");
    creatediv.innerHTML = `
                    <div class="card ">
                        <div class="card overflow-hidden bg-base-100 shadow-md border border-white    rounded-lg ">
                            <figure>
                            <img src="${card.imgUrl}" alt="Shoes" class="rounded-md" />
                            </figure>
                        <div class="card-body">
                            <h2 class="card-title text-white text-center py-6 text-4xl ">${card.name}</h2>
                            <div class="card-actions flex justify-center">
                                <button id="${card.btnId}" class="btn px-6 py-3 rounded-full bg-yellow-500 hover:bg-white mb-6">Buy Now</button>
                            </div>
                            </div>
                        </div>
                    </div>`
        maindisplay.appendChild(creatediv);
        const cardbtn = document.getElementById(card.btnId);
        const newli = document.createElement("li");
        const displayli = document.getElementById("selected_ul");

            cardbtn.addEventListener("click", function(e){
                e.preventDefault;
                const newli = document.createElement("li");
                displayli.appendChild(newli);
                newli.innerHTML = `<li class="text-yellow-500 text-center ">${card.name} </li>`;
                cardbtn.setAttribute("disabled", "true");
                cardbtn.classList.add("bg-gray-500", "hover:bg-gray-500");
                noli++;
                calculation(noli);
            });
}

displayCard(AlexOvechkin);
displayCard(SidneyCrosby);
displayCard(ConnorMacdavid);
displayCard(NathanMackkimon);
displayCard(VictorHeadem);
displayCard(Patricklaine);
displayCard(NikitaChuchor);
displayCard(MarioLemieux);
displayCard(AustonMaththeu);


