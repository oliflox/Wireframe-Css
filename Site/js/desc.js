let gauche = document.querySelector('.gauche');
let droite = document.querySelector('.droite');

let desc = document.querySelector('#desc');
let tech = document.querySelector('#tech');

droite.addEventListener('click',function(){
    droite.classList.add('underline');
    gauche.classList.remove('underline');

    desc.classList.add('remove');
    tech.classList.remove('remove');
})

gauche.addEventListener('click',function(){
    droite.classList.remove('underline');
    gauche.classList.add('underline');

    desc.classList.remove('remove');
    tech.classList.add('remove');
})