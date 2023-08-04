// Colocar aqui músicas novas copiando desde uma chave para a outra com a virgula no final e alterar os dados
const musics = [
{
    Name: "KITTEN",
    Img: 'kiten.png',
    Link: "https://youtu.be/acpiNz0mx8E"
}
]


// Colocar as infos do show aqui embaixo como no irei explicar
const shows = [
    {
        Name: "Ensaio Aberto",
        Data: "20/06/23",
        Time: "20:30",
        LocalS: "heilige Pocket",
        Street: "Marechal deodoro 6969",
        Block: "Centro",
        City: "Santa Cruz do Sul",
        Value: 299mn 
    }
]

shows.forEach((show)=> {
    console.log('loading shows')
    const div = document.createElement('div')
    const title = document.createElement('h2')
    const time = document.createElement('p')
    const place = document.createElement('p')
    const value = document.createElement('p')

    console.log('injecting shows')
    div.classList.add('show')
    title.innerHTML = show.Name
    time.innerHTML = `Data:${show.Data}<br>Às ${show.Time}`
    place.innerHTML = `Local:<br>${show.LocalS}<br>${show.Street} - ${show.Block}<br>${show.city}`
    
    console.log('indentifing value')
    if (show.Value == 'none') {
        value.innerHTML = 'Gratuito'
        console.log('value free')
    } else if (typeof show.Value === "number") {
        value.innerHTML = `R$${show.Value}`
        console.log('value number')
    }else if (typeof show.Value === "string") {
        value.innerHTML = show.Value
        console.log('value other')
    }else {
        console.error('Valor não indentificado')
    }
    
})

musics.forEach((music)=> {
    console.log('loading musics')
    const div = document.createElement('a');
    const img = document.createElement('img');
    const name = document.createElement('h2');

    div.classList.add('music')
    div.href = music.Link
    img.src = `/assets/${music.Img}`
    name.innerHTML = music.Name
    div.target = '_blank'

    div.appendChild(img)
    div.appendChild(name)
    console.log('injecting musics')
    document.getElementById('musicas').appendChild(div)
    console.log('musics loaded')
}
)
