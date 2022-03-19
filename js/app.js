const images = [
    {
        name: 'nature',
        url: 'nature.jpg'
    },
    {
        name: 'sea',
        url: 'sea.jpg'
    },
    {
        name: 'sky',
        url: 'sky.jpg'
    },
    {
        name: 'tree',
        url: 'tree.jpg'
    },

]

const dots = document.getElementById('dots-container')

for(let i = 0; i < images.length; i++){
    let dot = document.createElement('div')
    dot.classList.add(`dot`,i)
    dots.append(dot)
    dot.addEventListener('click',(e)=>{
        img.setAttribute('src',images[i].url)
        let active = dots.querySelector('.active')
        if(active) active.classList.remove('active')
        e.target.classList.add('active')
    })
}

const dotsCollection = dots.getElementsByTagName('div')
dotsCollection[0].classList.add('active')

function activeClass (){
    let active = dots.querySelector('.active')
    if(active) active.classList.remove('active')
    dotsCollection[count].classList.add('active')
}

function slideRight (){
    count++
    count = count === images.length ? 0 : count
    img.setAttribute('src',images[count].url)
}

function slideLeft (){
    count--
    count = count < 0 ? images.length-1 : count
    img.setAttribute('src',images[count].url)
}

let count = 0
const img = document.querySelector('img')
const rightBtn = document.querySelector('.right-btn')
const leftBtn = document.querySelector('.left-btn')
rightBtn.addEventListener('click',()=>{
    slideRight ()
    activeClass ()
})
leftBtn.addEventListener('click',()=>{
    slideLeft ()
    activeClass ()
})
document.addEventListener('keydown',(e)=>{
    if(e.keyCode === 39){
    slideRight ()
    activeClass ()
}
})
document.addEventListener('keydown',(e)=>{
    if(e.which === 37){
        slideLeft ()
        activeClass ()
}
})