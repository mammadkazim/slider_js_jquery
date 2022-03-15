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
$('.right-btn').click(()=>{
    count++
    count = count === 4 ? 0 : count
    $('img').attr('src',images[count].url)
})
$('.left-btn').click(()=>{
    count--
    count = count < 0 ? 3 : count
    $('img').attr('src',images[count].url)
})
$(document).keydown((e)=>{
    if(e.keyCode === 39){
    count++
    count = count === 4 ? 0 : count
    $('img').attr('src',images[count].url)
}
})
$(document).keydown((e)=>{
    if(e.which === 37){
        count--
        count = count < 0 ? 3 : count
        $('img').attr('src',images[count].url)
}
})