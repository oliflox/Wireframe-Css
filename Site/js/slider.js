let img_slider = document.getElementsByClassName('img_slider');

let etape = 0 ;

let nb_image = img_slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages(){
    for(let i = 0 ; i < nb_image ; i++){
        img_slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function(){
    etape++;
    if(etape >= nb_image){
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})

precedent.addEventListener('click',function(){
    etape--;
    if(etape < 0){
        etape = nb_image - 1;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})