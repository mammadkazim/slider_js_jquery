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
    }
]
let count = 0
const img = document.querySelector('img')
const rightBtn = document.querySelector('.right-btn')
const leftBtn = document.querySelector('.left-btn')
rightBtn.addEventListener('click',()=>{
    count++
    count = count === 4 ? 0 : count
    img.setAttribute('src',images[count].url)
})
leftBtn.addEventListener('click',()=>{
    count--
    count = count < 0 ? 3 : count
    img.setAttribute('src',images[count].url)
})
document.addEventListener('keydown',(e)=>{
    if(e.keyCode === 39){
    count++
    count = count === 4 ? 0 : count
    img.setAttribute('src',images[count].url)
}
})
document.addEventListener('keydown',(e)=>{
    if(e.which === 37){
        count--
        count = count < 0 ? 3 : count
        img.setAttribute('src',images[count].url)
}
})