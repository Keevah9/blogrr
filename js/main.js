let menuBtn = document.querySelector('.menu')

menuBtn.addEventListener('click', () =>{
    let navMenu = document.getElementById('nav')
    if(navMenu.className === 'navList'){
        navMenu.className += 'responsive'
    }else{
        navMenu.className = 'navList'
    }
})