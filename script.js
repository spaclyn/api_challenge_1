const clicking =  async() => {
    const url = "https://ghibliapi.herokuapp.com/films"
    // let rest =  await fetch(url)
    // let json = await rest.json()
    // console.log(json)
    fetch(url)
        .then(res => res.json())
         .then(json => {
           console.log(json)
           displayFilms(json)  
         }) 
         
}
const displayFilms = (films) => {
const wrapper = document.getElementById("results")

for(let film of films){

    let card = document.createElement("div")
    let card_header = document.createElement("div")
    let card_body = document.createElement("div")

    card.className = "card"
    card_header.className = "card-header"
    card_body.className = "card-body"

    card_header.innerText = `${film.title} (${film.release_date})`
    card_body.innerText = `${film.description} / ROTTEN TOMATO SCORE: ${film.rt_score}`


    card.appendChild(card_header)
    card.appendChild(card_body)
    
    wrapper.appendChild(card)
}
}
