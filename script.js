let cardArr = [
    {img: "/img/venterdæk.png", title: "Venterdæk", info: "Venterdæk, 2000kr pr styk! klick for information", link: "placeholder.html"},
    {img: "/img/venterdæk.png", title: "Sommerdæk", info: "Sommerdæk til næste år, klik her!", link: "Gå til information"}, 
    {img: "/img/venterdæk.png", title: "42\"dæk", info: "42\" dæk til din traktor", link: "placeholder.html"},
    {img: "/img/venterdæk.png", title: "Placeholder", info: "Placeholder information", link: "Gå til information"},
    {img: "/img/venterdæk.png", title: "Placeholder", info: "Placeholder information", link: "Gå til information"},
    {img: "/img/venterdæk.png", title: "Placeholder", info: "Placeholder information", link: "Gå til information"},
    {img: "/img/venterdæk.png", title: "Placeholder", info: "Placeholder information", link: "Gå til information"},

];
let target = document.querySelector("#card-grid");

cardArr.forEach((card) => target.innerHTML += editTemplate(card.img, card.title, card.info, card.link))

function editTemplate(img, title, info, link) {
    return `
        <div class="col d-flex">
            <div class="card flex-fill">
                <img src="${img}" class="card-img-top" alt="venterdæk">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-dark">${title}</h5>
                    <p class="card-text flex-fill">${info}</p>
                    <a href="${link}" class="btn btn-primary">Gå til information</a>
                </div>
            </div>
        </div>
    `;
} 