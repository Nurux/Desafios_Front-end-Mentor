let ac = document.querySelectorAll('.accordion')
let panel = document.querySelectorAll('.panel')
let main = document.querySelector('main')

for(let i = 0; i < ac.length; i ++){
    ac[i].addEventListener('click', () => {
        ac[i].classList.toggle('active')
        panel[i].classList.toggle('active')
        if( panel[i].classList.contains('active') ){
            main.style.height = '80vh'
        }else{
            main.style.height = '70vh'
        }
    })
}



