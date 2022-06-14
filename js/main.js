let menuBtn = document.querySelector('.menu')
let nav = document.querySelector('nav')

menuBtn.addEventListener('click', function(menu){
    let navBar = nav
    if( window.matchMedia('screen and (max-width:768px)'.matches)  && (navBar.style.display === 'block') ){
        navBar.style.display = 'none'
    }else{
        navBar.style.display = 'block'
    }
})